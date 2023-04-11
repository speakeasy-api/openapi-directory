import { SpeakeasyBase } from "../../../internal/utils";
import { HttpMethodEnum } from "./httpmethodenum";
import { HttpPathMatch } from "./httppathmatch";
import { HttpQueryParameter } from "./httpqueryparameter";
import { HttpRouteHeader } from "./httprouteheader";
import { HttpSchemeEnum } from "./httpschemeenum";
/**
 * An object that represents the requirements for a route to match HTTP requests for a virtual router.
 */
export declare class HttpRouteMatch extends SpeakeasyBase {
    headers?: HttpRouteHeader[];
    method?: HttpMethodEnum;
    path?: HttpPathMatch;
    port?: number;
    prefix?: string;
    queryParameters?: HttpQueryParameter[];
    scheme?: HttpSchemeEnum;
}

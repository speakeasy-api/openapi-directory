import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteHostnameMatch } from "./gatewayroutehostnamematch";
import { HttpGatewayRouteHeader } from "./httpgatewayrouteheader";
import { HttpMethodEnum } from "./httpmethodenum";
import { HttpPathMatch } from "./httppathmatch";
import { HttpQueryParameter } from "./httpqueryparameter";
/**
 * An object that represents the criteria for determining a request match.
 */
export declare class HttpGatewayRouteMatch extends SpeakeasyBase {
    headers?: HttpGatewayRouteHeader[];
    hostname?: GatewayRouteHostnameMatch;
    method?: HttpMethodEnum;
    path?: HttpPathMatch;
    port?: number;
    prefix?: string;
    queryParameters?: HttpQueryParameter[];
}

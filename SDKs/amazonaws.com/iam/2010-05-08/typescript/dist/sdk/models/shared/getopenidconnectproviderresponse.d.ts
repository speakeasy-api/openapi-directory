import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Contains the response to a successful <a>GetOpenIDConnectProvider</a> request.
 */
export declare class GetOpenIDConnectProviderResponse extends SpeakeasyBase {
    clientIDList?: string[];
    createDate?: Date;
    tags?: Tag[];
    thumbprintList?: string[];
    url?: string;
}

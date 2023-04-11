import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request.
 */
export declare class CreateOpenIDConnectProviderResponse extends SpeakeasyBase {
    openIDConnectProviderArn?: string;
    tags?: Tag[];
}

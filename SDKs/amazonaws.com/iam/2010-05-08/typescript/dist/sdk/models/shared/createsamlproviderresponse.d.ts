import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Contains the response to a successful <a>CreateSAMLProvider</a> request.
 */
export declare class CreateSAMLProviderResponse extends SpeakeasyBase {
    samlProviderArn?: string;
    tags?: Tag[];
}

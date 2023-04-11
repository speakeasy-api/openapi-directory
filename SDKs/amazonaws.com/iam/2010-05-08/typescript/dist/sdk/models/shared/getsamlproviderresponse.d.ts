import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Contains the response to a successful <a>GetSAMLProvider</a> request.
 */
export declare class GetSAMLProviderResponse extends SpeakeasyBase {
    createDate?: Date;
    samlMetadataDocument?: string;
    tags?: Tag[];
    validUntil?: Date;
}

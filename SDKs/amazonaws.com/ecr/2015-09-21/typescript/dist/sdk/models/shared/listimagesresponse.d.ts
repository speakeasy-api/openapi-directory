import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
/**
 * Success
 */
export declare class ListImagesResponse extends SpeakeasyBase {
    imageIds?: ImageIdentifier[];
    nextToken?: string;
}

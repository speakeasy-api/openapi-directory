import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingImage } from "./streamingimage";
/**
 * Success
 */
export declare class ListStreamingImagesResponse extends SpeakeasyBase {
    nextToken?: string;
    streamingImages?: StreamingImage[];
}

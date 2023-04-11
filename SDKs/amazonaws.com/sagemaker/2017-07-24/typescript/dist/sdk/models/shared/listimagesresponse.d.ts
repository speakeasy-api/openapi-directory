import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Success
 */
export declare class ListImagesResponse extends SpeakeasyBase {
    images?: Image[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ImageVersion } from "./imageversion";
/**
 * Success
 */
export declare class ListImagesResponse extends SpeakeasyBase {
    imageVersionList?: ImageVersion[];
    nextToken?: string;
    requestId?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSummary } from "./imagesummary";
/**
 * Success
 */
export declare class ListImagePipelineImagesResponse extends SpeakeasyBase {
    imageSummaryList?: ImageSummary[];
    nextToken?: string;
    requestId?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSummary } from "./imagesummary";
/**
 * Success
 */
export declare class ListImageBuildVersionsResponse extends SpeakeasyBase {
    imageSummaryList?: ImageSummary[];
    nextToken?: string;
    requestId?: string;
}

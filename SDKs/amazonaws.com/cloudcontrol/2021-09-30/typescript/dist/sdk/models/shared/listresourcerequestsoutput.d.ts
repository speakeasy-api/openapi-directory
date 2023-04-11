import { SpeakeasyBase } from "../../../internal/utils";
import { ProgressEvent } from "./progressevent";
/**
 * Success
 */
export declare class ListResourceRequestsOutput extends SpeakeasyBase {
    nextToken?: string;
    resourceRequestStatusSummaries?: ProgressEvent[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ModelMetadataSummary } from "./modelmetadatasummary";
/**
 * Success
 */
export declare class ListModelMetadataResponse extends SpeakeasyBase {
    modelMetadataSummaries: ModelMetadataSummary[];
    nextToken?: string;
}

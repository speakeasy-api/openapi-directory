import { SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobFilter } from "./comprehendmedicalasyncjobfilter";
export declare class ListSNOMEDCTInferenceJobsRequest extends SpeakeasyBase {
    /**
     * Provides information for filtering a list of detection jobs.
     */
    filter?: ComprehendMedicalAsyncJobFilter;
    maxResults?: number;
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";
/**
 * Success
 */
export declare class ListSNOMEDCTInferenceJobsResponse extends SpeakeasyBase {
    comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";
/**
 * Success
 */
export declare class ListIcd10CMInferenceJobsResponse extends SpeakeasyBase {
    comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";
/**
 * Success
 */
export declare class ListPHIDetectionJobsResponse extends SpeakeasyBase {
    comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
    nextToken?: string;
}

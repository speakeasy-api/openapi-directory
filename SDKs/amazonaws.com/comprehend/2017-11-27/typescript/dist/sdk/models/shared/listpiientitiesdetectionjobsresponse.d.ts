import { SpeakeasyBase } from "../../../internal/utils";
import { PiiEntitiesDetectionJobProperties } from "./piientitiesdetectionjobproperties";
/**
 * Success
 */
export declare class ListPiiEntitiesDetectionJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    piiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];
}

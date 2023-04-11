import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSource } from "./experimentsource";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeExperimentResponse extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    description?: string;
    displayName?: string;
    experimentArn?: string;
    experimentName?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    source?: ExperimentSource;
}

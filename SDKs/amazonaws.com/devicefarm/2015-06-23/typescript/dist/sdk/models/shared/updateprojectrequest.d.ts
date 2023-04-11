import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * Represents a request to the update project operation.
 */
export declare class UpdateProjectRequest extends SpeakeasyBase {
    arn: string;
    defaultJobTimeoutMinutes?: number;
    name?: string;
    vpcConfig?: VpcConfig;
}

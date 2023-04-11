import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * Represents a request to the create project operation.
 */
export declare class CreateProjectRequest extends SpeakeasyBase {
    defaultJobTimeoutMinutes?: number;
    name: string;
    vpcConfig?: VpcConfig;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * Represents an operating-system neutral workspace for running and managing tests.
 */
export declare class Project extends SpeakeasyBase {
    arn?: string;
    created?: Date;
    defaultJobTimeoutMinutes?: number;
    name?: string;
    vpcConfig?: VpcConfig;
}

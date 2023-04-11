import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information that describes the requirements to the target engine on Amazon RDS.
 */
export declare class RdsRequirements extends SpeakeasyBase {
    deploymentOption?: string;
    engineEdition?: string;
    instanceMemory?: number;
    instanceVcpu?: number;
    storageIops?: number;
    storageSize?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information that describes the configuration of the recommended target engine on Amazon RDS.
 */
export declare class RdsConfiguration extends SpeakeasyBase {
    deploymentOption?: string;
    engineEdition?: string;
    instanceMemory?: number;
    instanceType?: string;
    instanceVcpu?: number;
    storageIops?: number;
    storageSize?: number;
    storageType?: string;
}

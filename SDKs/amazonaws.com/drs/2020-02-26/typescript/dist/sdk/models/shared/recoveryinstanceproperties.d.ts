import { SpeakeasyBase } from "../../../internal/utils";
import { Cpu } from "./cpu";
import { IdentificationHints } from "./identificationhints";
import { NetworkInterface } from "./networkinterface";
import { Os } from "./os";
import { RecoveryInstanceDisk } from "./recoveryinstancedisk";
/**
 * Properties of the Recovery Instance machine.
 */
export declare class RecoveryInstanceProperties extends SpeakeasyBase {
    cpus?: Cpu[];
    disks?: RecoveryInstanceDisk[];
    identificationHints?: IdentificationHints;
    lastUpdatedDateTime?: string;
    networkInterfaces?: NetworkInterface[];
    os?: Os;
    ramBytes?: number;
}

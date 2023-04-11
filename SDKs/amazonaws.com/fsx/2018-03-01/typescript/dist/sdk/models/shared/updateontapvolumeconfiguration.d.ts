import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";
/**
 * Used to specify changes to the ONTAP configuration for the volume you are updating.
 */
export declare class UpdateOntapVolumeConfiguration extends SpeakeasyBase {
    copyTagsToBackups?: boolean;
    junctionPath?: string;
    securityStyle?: SecurityStyleEnum;
    sizeInMegabytes?: number;
    snapshotPolicy?: string;
    storageEfficiencyEnabled?: boolean;
    tieringPolicy?: TieringPolicy;
}

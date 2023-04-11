import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeBooleanValue } from "./attributebooleanvalue";
export declare class ModifyVolumeAttributeRequest extends SpeakeasyBase {
    autoEnableIO?: AttributeBooleanValue;
    dryRun?: boolean;
    volumeId: string;
}

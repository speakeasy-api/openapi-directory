import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAutoRecoveryStateEnum } from "./instanceautorecoverystateenum";
export declare class ModifyInstanceMaintenanceOptionsRequest extends SpeakeasyBase {
    autoRecovery?: InstanceAutoRecoveryStateEnum;
    dryRun?: boolean;
    instanceId: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAutoRecoveryStateEnum } from "./instanceautorecoverystateenum";
/**
 * The maintenance options for the instance.
 */
export declare class InstanceMaintenanceOptionsRequest extends SpeakeasyBase {
    autoRecovery?: InstanceAutoRecoveryStateEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateAutoRecoveryStateEnum } from "./launchtemplateautorecoverystateenum";
/**
 * The maintenance options of your instance.
 */
export declare class LaunchTemplateInstanceMaintenanceOptionsRequest extends SpeakeasyBase {
    autoRecovery?: LaunchTemplateAutoRecoveryStateEnum;
}

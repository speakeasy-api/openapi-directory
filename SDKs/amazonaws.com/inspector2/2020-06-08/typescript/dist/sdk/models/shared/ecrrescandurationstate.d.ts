import { SpeakeasyBase } from "../../../internal/utils";
import { EcrRescanDurationEnum } from "./ecrrescandurationenum";
import { EcrRescanDurationStatusEnum } from "./ecrrescandurationstatusenum";
/**
 * Details about the state of any changes to the ECR automated re-scan duration setting.
 */
export declare class EcrRescanDurationState extends SpeakeasyBase {
    rescanDuration?: EcrRescanDurationEnum;
    status?: EcrRescanDurationStatusEnum;
    updatedAt?: Date;
}

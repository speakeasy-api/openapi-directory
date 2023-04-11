import { SpeakeasyBase } from "../../../internal/utils";
import { LastUpdateStatusValueEnum } from "./lastupdatestatusvalueenum";
/**
 * A value that indicates whether the update was successful.
 */
export declare class LastUpdateStatus extends SpeakeasyBase {
    failureReason?: string;
    status: LastUpdateStatusValueEnum;
}

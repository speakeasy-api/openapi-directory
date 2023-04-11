import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledUpdateGroupActionRequest } from "./scheduledupdategroupactionrequest";
export declare class BatchPutScheduledUpdateGroupActionType extends SpeakeasyBase {
    autoScalingGroupName: string;
    scheduledUpdateGroupActions: ScheduledUpdateGroupActionRequest[];
}

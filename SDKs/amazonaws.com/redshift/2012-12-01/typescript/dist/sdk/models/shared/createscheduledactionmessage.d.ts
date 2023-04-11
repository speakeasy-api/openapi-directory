import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledActionType } from "./scheduledactiontype";
export declare class CreateScheduledActionMessage extends SpeakeasyBase {
    enable?: boolean;
    endTime?: Date;
    iamRole: string;
    schedule: string;
    scheduledActionDescription?: string;
    scheduledActionName: string;
    startTime?: Date;
    targetAction: ScheduledActionType;
}

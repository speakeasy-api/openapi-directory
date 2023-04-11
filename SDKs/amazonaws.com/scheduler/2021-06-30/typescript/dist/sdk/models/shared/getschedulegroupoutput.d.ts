import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleGroupStateEnum } from "./schedulegroupstateenum";
/**
 * Success
 */
export declare class GetScheduleGroupOutput extends SpeakeasyBase {
    arn?: string;
    creationDate?: Date;
    lastModificationDate?: Date;
    name?: string;
    state?: ScheduleGroupStateEnum;
}

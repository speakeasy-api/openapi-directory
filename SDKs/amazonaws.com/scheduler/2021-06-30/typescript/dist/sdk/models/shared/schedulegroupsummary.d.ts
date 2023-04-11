import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleGroupStateEnum } from "./schedulegroupstateenum";
/**
 * The details of a schedule group.
 */
export declare class ScheduleGroupSummary extends SpeakeasyBase {
    arn?: string;
    creationDate?: Date;
    lastModificationDate?: Date;
    name?: string;
    state?: ScheduleGroupStateEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";
/**
 * Success
 */
export declare class DescribeApplicationStateResult extends SpeakeasyBase {
    applicationStatus?: ApplicationStatusEnum;
    lastUpdatedTime?: Date;
}

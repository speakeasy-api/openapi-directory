import { SpeakeasyBase } from "../../../internal/utils";
import { ShiftDetails } from "./shiftdetails";
import { ShiftTypeEnum } from "./shifttypeenum";
/**
 * Information about a shift that belongs to an on-call rotation.
 */
export declare class RotationShift extends SpeakeasyBase {
    contactIds?: string[];
    endTime: Date;
    shiftDetails?: ShiftDetails;
    startTime: Date;
    type?: ShiftTypeEnum;
}

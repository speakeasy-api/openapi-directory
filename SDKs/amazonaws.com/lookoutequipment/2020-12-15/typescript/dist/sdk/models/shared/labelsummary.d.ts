import { SpeakeasyBase } from "../../../internal/utils";
import { LabelRatingEnum } from "./labelratingenum";
/**
 *  Information about the label.
 */
export declare class LabelSummary extends SpeakeasyBase {
    createdAt?: Date;
    endTime?: Date;
    equipment?: string;
    faultCode?: string;
    labelGroupArn?: string;
    labelGroupName?: string;
    labelId?: string;
    rating?: LabelRatingEnum;
    startTime?: Date;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { LabelRatingEnum } from "./labelratingenum";
/**
 * Success
 */
export declare class DescribeLabelResponse extends SpeakeasyBase {
    createdAt?: Date;
    endTime?: Date;
    equipment?: string;
    faultCode?: string;
    labelGroupArn?: string;
    labelGroupName?: string;
    labelId?: string;
    notes?: string;
    rating?: LabelRatingEnum;
    startTime?: Date;
}

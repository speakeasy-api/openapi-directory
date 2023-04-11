import { SpeakeasyBase } from "../../../internal/utils";
import { LabelRatingEnum } from "./labelratingenum";
export declare class CreateLabelRequest extends SpeakeasyBase {
    clientToken: string;
    endTime: Date;
    equipment?: string;
    faultCode?: string;
    labelGroupName: string;
    notes?: string;
    rating: LabelRatingEnum;
    startTime: Date;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { EndDateTypeEnum } from "./enddatetypeenum";
export declare class ModifyCapacityReservationRequest extends SpeakeasyBase {
    accept?: boolean;
    additionalInfo?: string;
    capacityReservationId: string;
    dryRun?: boolean;
    endDate?: Date;
    endDateType?: EndDateTypeEnum;
    instanceCount?: number;
}

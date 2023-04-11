import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyCapacityReservationFleetRequest extends SpeakeasyBase {
    capacityReservationFleetId: string;
    dryRun?: boolean;
    endDate?: Date;
    removeEndDate?: boolean;
    totalTargetCapacity?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationSpecification } from "./capacityreservationspecification";
export declare class ModifyInstanceCapacityReservationAttributesRequest extends SpeakeasyBase {
    capacityReservationSpecification: CapacityReservationSpecification;
    dryRun?: boolean;
    instanceId: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedStatusEnum } from "./appliedstatusenum";
/**
 * A complex structure that lists the zonal shifts for a managed resource and their statuses for the resource.
 */
export declare class ZonalShiftInResource extends SpeakeasyBase {
    appliedStatus: AppliedStatusEnum;
    awayFrom: string;
    comment: string;
    expiryTime: Date;
    resourceIdentifier: string;
    startTime: Date;
    zonalShiftId: string;
}

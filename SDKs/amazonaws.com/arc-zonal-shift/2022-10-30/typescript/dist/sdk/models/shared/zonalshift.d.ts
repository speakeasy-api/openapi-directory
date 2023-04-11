import { SpeakeasyBase } from "../../../internal/utils";
import { ZonalShiftStatusEnum } from "./zonalshiftstatusenum";
/**
 * Success
 */
export declare class ZonalShift extends SpeakeasyBase {
    awayFrom: string;
    comment: string;
    expiryTime: Date;
    resourceIdentifier: string;
    startTime: Date;
    status: ZonalShiftStatusEnum;
    zonalShiftId: string;
}

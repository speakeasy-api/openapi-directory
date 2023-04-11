import { SpeakeasyBase } from "../../../internal/utils";
import { EphemerisInvalidReasonEnum } from "./ephemerisinvalidreasonenum";
import { EphemerisStatusEnum } from "./ephemerisstatusenum";
import { EphemerisTypeDescription } from "./ephemeristypedescription";
/**
 * Success
 */
export declare class DescribeEphemerisResponse extends SpeakeasyBase {
    creationTime?: Date;
    enabled?: boolean;
    ephemerisId?: string;
    invalidReason?: EphemerisInvalidReasonEnum;
    name?: string;
    priority?: number;
    satelliteId?: string;
    status?: EphemerisStatusEnum;
    suppliedData?: EphemerisTypeDescription;
    tags?: Record<string, string>;
}

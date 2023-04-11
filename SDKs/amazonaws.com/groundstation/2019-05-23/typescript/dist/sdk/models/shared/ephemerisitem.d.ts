import { SpeakeasyBase } from "../../../internal/utils";
import { EphemerisStatusEnum } from "./ephemerisstatusenum";
import { S3Object } from "./s3object";
/**
 * Ephemeris item.
 */
export declare class EphemerisItem extends SpeakeasyBase {
    creationTime?: Date;
    enabled?: boolean;
    ephemerisId?: string;
    name?: string;
    priority?: number;
    sourceS3Object?: S3Object;
    status?: EphemerisStatusEnum;
}

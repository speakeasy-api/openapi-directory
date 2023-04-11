import { SpeakeasyBase } from "../../../internal/utils";
import { ChecksumTypeEnum } from "./checksumtypeenum";
/**
 * Information about the checksum of a model deployed on a device.
 */
export declare class Checksum extends SpeakeasyBase {
    sum?: string;
    type?: ChecksumTypeEnum;
}

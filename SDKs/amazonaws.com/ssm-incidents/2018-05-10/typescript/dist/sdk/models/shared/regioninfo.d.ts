import { SpeakeasyBase } from "../../../internal/utils";
import { RegionStatusEnum } from "./regionstatusenum";
/**
 * Information about a Amazon Web Services Region in your replication set.
 */
export declare class RegionInfo extends SpeakeasyBase {
    sseKmsKeyId?: string;
    status: RegionStatusEnum;
    statusMessage?: string;
    statusUpdateDateTime: Date;
}

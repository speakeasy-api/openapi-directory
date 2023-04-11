import { SpeakeasyBase } from "../../../internal/utils";
/**
 * vCenter client.
 */
export declare class VcenterClient extends SpeakeasyBase {
    arn?: string;
    datacenterName?: string;
    hostname?: string;
    lastSeenDatetime?: string;
    sourceServerTags?: Record<string, string>;
    tags?: Record<string, string>;
    vcenterClientID?: string;
    vcenterUUID?: string;
}

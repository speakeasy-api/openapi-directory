import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates if the specified CNAME is available.
 */
export declare class CheckDNSAvailabilityResultMessage extends SpeakeasyBase {
    available?: boolean;
    fullyQualifiedCNAME?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response
 */
export declare class LicenseInfo extends SpeakeasyBase {
    daysUntilExpiration?: number;
    expireAt?: string;
    kind?: string;
    seats?: any;
    seatsAvailable?: any;
    seatsUsed?: number;
}

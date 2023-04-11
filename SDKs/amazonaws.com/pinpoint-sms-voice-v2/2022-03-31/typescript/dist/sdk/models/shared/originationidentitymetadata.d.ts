import { SpeakeasyBase } from "../../../internal/utils";
import { NumberCapabilityEnum } from "./numbercapabilityenum";
/**
 * The metadata for an origination identity associated with a pool.
 */
export declare class OriginationIdentityMetadata extends SpeakeasyBase {
    isoCountryCode: string;
    numberCapabilities: NumberCapabilityEnum[];
    originationIdentity: string;
    originationIdentityArn: string;
}

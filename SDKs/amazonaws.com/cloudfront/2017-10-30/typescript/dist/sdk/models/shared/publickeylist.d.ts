import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeySummaryList } from "./publickeysummarylist";
/**
 * A list of public keys you've added to CloudFront to use with features like field-level encryption.
 */
export declare class PublicKeyList extends SpeakeasyBase {
    items?: PublicKeySummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}

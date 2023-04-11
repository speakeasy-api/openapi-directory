import { SpeakeasyBase } from "../../../internal/utils";
import { KGKeyPairIdsList } from "./kgkeypairidslist";
/**
 * A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
 */
export declare class ActiveTrustedKeyGroups extends SpeakeasyBase {
    enabled: boolean;
    items?: KGKeyPairIdsList[];
    quantity: number;
}

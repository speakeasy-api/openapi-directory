import { SpeakeasyBase } from "../../../internal/utils";
import { SignerList } from "./signerlist";
/**
 * A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export declare class ActiveTrustedSigners extends SpeakeasyBase {
    enabled: boolean;
    items?: SignerList[];
    quantity: number;
}

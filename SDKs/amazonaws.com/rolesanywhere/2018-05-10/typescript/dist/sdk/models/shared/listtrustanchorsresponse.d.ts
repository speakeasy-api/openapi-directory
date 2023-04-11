import { SpeakeasyBase } from "../../../internal/utils";
import { TrustAnchorDetail } from "./trustanchordetail";
/**
 * Success
 */
export declare class ListTrustAnchorsResponse extends SpeakeasyBase {
    nextToken?: string;
    trustAnchors?: TrustAnchorDetail[];
}

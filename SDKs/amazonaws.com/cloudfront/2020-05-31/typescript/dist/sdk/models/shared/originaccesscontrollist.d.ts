import { SpeakeasyBase } from "../../../internal/utils";
import { OriginAccessControlSummaryList } from "./originaccesscontrolsummarylist";
/**
 * A list of CloudFront origin access controls.
 */
export declare class OriginAccessControlList extends SpeakeasyBase {
    isTruncated: boolean;
    items?: OriginAccessControlSummaryList[];
    marker: string;
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}

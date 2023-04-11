import { SpeakeasyBase } from "../../../internal/utils";
import { VpcIngressConnectionSummary } from "./vpcingressconnectionsummary";
/**
 * Success
 */
export declare class ListVpcIngressConnectionsResponse extends SpeakeasyBase {
    nextToken?: string;
    vpcIngressConnectionSummaryList: VpcIngressConnectionSummary[];
}

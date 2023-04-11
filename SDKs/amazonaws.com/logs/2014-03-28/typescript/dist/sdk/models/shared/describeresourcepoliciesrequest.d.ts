import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeResourcePoliciesRequest extends SpeakeasyBase {
    limit?: number;
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
}

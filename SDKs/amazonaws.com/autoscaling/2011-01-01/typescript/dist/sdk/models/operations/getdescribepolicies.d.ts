import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribePoliciesActionEnum {
    DescribePolicies = "DescribePolicies"
}
export declare enum GETDescribePoliciesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDescribePoliciesRequest extends SpeakeasyBase {
    action: GETDescribePoliciesActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName?: string;
    /**
     * The maximum number of items to be returned with each call. The default value is <code>50</code> and the maximum value is <code>100</code>.
     */
    maxRecords?: number;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: string;
    /**
     * <p>The names of one or more policies. If you omit this property, all policies are described. If a group name is provided, the results are limited to that group. If you specify an unknown policy name, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 items.</p>
     */
    policyNames?: string[];
    /**
     * One or more policy types. The valid values are <code>SimpleScaling</code>, <code>StepScaling</code>, <code>TargetTrackingScaling</code>, and <code>PredictiveScaling</code>.
     */
    policyTypes?: string[];
    version: GETDescribePoliciesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribePoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

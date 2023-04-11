import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeScalingActivitiesActionEnum {
    DescribeScalingActivities = "DescribeScalingActivities"
}
export declare enum GETDescribeScalingActivitiesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDescribeScalingActivitiesRequest extends SpeakeasyBase {
    action: GETDescribeScalingActivitiesActionEnum;
    /**
     * <p>The activity IDs of the desired scaling activities. If you omit this property, all activities for the past six weeks are described. If unknown activities are requested, they are ignored with no error. If you specify an Auto Scaling group, the results are limited to that group.</p> <p>Array Members: Maximum number of 50 IDs.</p>
     */
    activityIds?: string[];
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName?: string;
    /**
     * Indicates whether to include scaling activity from deleted Auto Scaling groups.
     */
    includeDeletedGroups?: boolean;
    /**
     * The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.
     */
    maxRecords?: number;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: string;
    version: GETDescribeScalingActivitiesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeScalingActivitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

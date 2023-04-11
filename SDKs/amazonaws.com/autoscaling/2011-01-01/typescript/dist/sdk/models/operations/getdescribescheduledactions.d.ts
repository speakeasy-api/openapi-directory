import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeScheduledActionsActionEnum {
    DescribeScheduledActions = "DescribeScheduledActions"
}
export declare enum GETDescribeScheduledActionsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDescribeScheduledActionsRequest extends SpeakeasyBase {
    action: GETDescribeScheduledActionsActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName?: string;
    /**
     * The latest scheduled start time to return. If scheduled action names are provided, this property is ignored.
     */
    endTime?: Date;
    /**
     * The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
     */
    maxRecords?: number;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: string;
    /**
     * <p>The names of one or more scheduled actions. If you omit this property, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 actions.</p>
     */
    scheduledActionNames?: string[];
    /**
     * The earliest scheduled start time to return. If scheduled action names are provided, this property is ignored.
     */
    startTime?: Date;
    version: GETDescribeScheduledActionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeScheduledActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

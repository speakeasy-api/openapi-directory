import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEventTrackerXAmzTargetEnum {
    AmazonPersonalizeDescribeEventTracker = "AmazonPersonalize.DescribeEventTracker"
}
export declare class DescribeEventTrackerRequest extends SpeakeasyBase {
    describeEventTrackerRequest: shared.DescribeEventTrackerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventTrackerXAmzTargetEnum;
}
export declare class DescribeEventTrackerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEventTrackerResponse?: shared.DescribeEventTrackerResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

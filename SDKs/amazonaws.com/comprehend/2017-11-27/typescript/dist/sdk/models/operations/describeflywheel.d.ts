import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFlywheelXAmzTargetEnum {
    Comprehend20171127DescribeFlywheel = "Comprehend_20171127.DescribeFlywheel"
}
export declare class DescribeFlywheelRequest extends SpeakeasyBase {
    describeFlywheelRequest: shared.DescribeFlywheelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFlywheelXAmzTargetEnum;
}
export declare class DescribeFlywheelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFlywheelResponse?: shared.DescribeFlywheelResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

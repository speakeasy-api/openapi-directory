import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServiceXAmzTargetEnum {
    AppRunnerDescribeService = "AppRunner.DescribeService"
}
export declare class DescribeServiceRequest extends SpeakeasyBase {
    describeServiceRequest: shared.DescribeServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceXAmzTargetEnum;
}
export declare class DescribeServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeServiceResponse?: shared.DescribeServiceResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

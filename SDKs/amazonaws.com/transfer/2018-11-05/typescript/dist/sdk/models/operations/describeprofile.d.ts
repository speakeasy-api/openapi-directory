import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProfileXAmzTargetEnum {
    TransferServiceDescribeProfile = "TransferService.DescribeProfile"
}
export declare class DescribeProfileRequest extends SpeakeasyBase {
    describeProfileRequest: shared.DescribeProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProfileXAmzTargetEnum;
}
export declare class DescribeProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProfileResponse?: shared.DescribeProfileResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

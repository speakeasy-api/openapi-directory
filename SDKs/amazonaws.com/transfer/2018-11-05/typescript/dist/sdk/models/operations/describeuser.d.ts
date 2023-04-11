import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUserXAmzTargetEnum {
    TransferServiceDescribeUser = "TransferService.DescribeUser"
}
export declare class DescribeUserRequest extends SpeakeasyBase {
    describeUserRequest: shared.DescribeUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserXAmzTargetEnum;
}
export declare class DescribeUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUserResponse?: shared.DescribeUserResponse;
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

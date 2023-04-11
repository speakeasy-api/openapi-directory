import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHostKeyXAmzTargetEnum {
    TransferServiceDescribeHostKey = "TransferService.DescribeHostKey"
}
export declare class DescribeHostKeyRequest extends SpeakeasyBase {
    describeHostKeyRequest: shared.DescribeHostKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHostKeyXAmzTargetEnum;
}
export declare class DescribeHostKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeHostKeyResponse?: shared.DescribeHostKeyResponse;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAccessXAmzTargetEnum {
    TransferServiceDescribeAccess = "TransferService.DescribeAccess"
}
export declare class DescribeAccessRequest extends SpeakeasyBase {
    describeAccessRequest: shared.DescribeAccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccessXAmzTargetEnum;
}
export declare class DescribeAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAccessResponse?: shared.DescribeAccessResponse;
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

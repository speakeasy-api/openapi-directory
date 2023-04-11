import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServerXAmzTargetEnum {
    TransferServiceDescribeServer = "TransferService.DescribeServer"
}
export declare class DescribeServerRequest extends SpeakeasyBase {
    describeServerRequest: shared.DescribeServerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServerXAmzTargetEnum;
}
export declare class DescribeServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeServerResponse?: shared.DescribeServerResponse;
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

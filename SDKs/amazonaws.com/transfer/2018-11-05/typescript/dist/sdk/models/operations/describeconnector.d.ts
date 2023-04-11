import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectorXAmzTargetEnum {
    TransferServiceDescribeConnector = "TransferService.DescribeConnector"
}
export declare class DescribeConnectorRequest extends SpeakeasyBase {
    describeConnectorRequest: shared.DescribeConnectorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectorXAmzTargetEnum;
}
export declare class DescribeConnectorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConnectorResponse?: shared.DescribeConnectorResponse;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeVpcConnectorXAmzTargetEnum {
    AppRunnerDescribeVpcConnector = "AppRunner.DescribeVpcConnector"
}
export declare class DescribeVpcConnectorRequest extends SpeakeasyBase {
    describeVpcConnectorRequest: shared.DescribeVpcConnectorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVpcConnectorXAmzTargetEnum;
}
export declare class DescribeVpcConnectorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeVpcConnectorResponse?: shared.DescribeVpcConnectorResponse;
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

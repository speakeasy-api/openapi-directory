import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeVpcIngressConnectionXAmzTargetEnum {
    AppRunnerDescribeVpcIngressConnection = "AppRunner.DescribeVpcIngressConnection"
}
export declare class DescribeVpcIngressConnectionRequest extends SpeakeasyBase {
    describeVpcIngressConnectionRequest: shared.DescribeVpcIngressConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVpcIngressConnectionXAmzTargetEnum;
}
export declare class DescribeVpcIngressConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeVpcIngressConnectionResponse?: shared.DescribeVpcIngressConnectionResponse;
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

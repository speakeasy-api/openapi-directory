import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeNamespaceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDescribeNamespace = "IotThingsGraphFrontEndService.DescribeNamespace"
}
export declare class DescribeNamespaceRequest extends SpeakeasyBase {
    describeNamespaceRequest: shared.DescribeNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNamespaceXAmzTargetEnum;
}
export declare class DescribeNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeNamespaceResponse?: shared.DescribeNamespaceResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
}

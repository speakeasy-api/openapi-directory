import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAppBlocksXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeAppBlocks = "PhotonAdminProxyService.DescribeAppBlocks"
}
export declare class DescribeAppBlocksRequest extends SpeakeasyBase {
    describeAppBlocksRequest: shared.DescribeAppBlocksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAppBlocksXAmzTargetEnum;
}
export declare class DescribeAppBlocksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAppBlocksResult?: shared.DescribeAppBlocksResult;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

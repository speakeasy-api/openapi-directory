import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListVpcIngressConnectionsXAmzTargetEnum {
    AppRunnerListVpcIngressConnections = "AppRunner.ListVpcIngressConnections"
}
export declare class ListVpcIngressConnectionsRequest extends SpeakeasyBase {
    listVpcIngressConnectionsRequest: shared.ListVpcIngressConnectionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVpcIngressConnectionsXAmzTargetEnum;
}
export declare class ListVpcIngressConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listVpcIngressConnectionsResponse?: shared.ListVpcIngressConnectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

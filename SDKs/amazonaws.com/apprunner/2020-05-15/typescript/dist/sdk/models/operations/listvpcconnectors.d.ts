import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListVpcConnectorsXAmzTargetEnum {
    AppRunnerListVpcConnectors = "AppRunner.ListVpcConnectors"
}
export declare class ListVpcConnectorsRequest extends SpeakeasyBase {
    listVpcConnectorsRequest: shared.ListVpcConnectorsRequest;
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
    xAmzTarget: ListVpcConnectorsXAmzTargetEnum;
}
export declare class ListVpcConnectorsResponse extends SpeakeasyBase {
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
    listVpcConnectorsResponse?: shared.ListVpcConnectorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

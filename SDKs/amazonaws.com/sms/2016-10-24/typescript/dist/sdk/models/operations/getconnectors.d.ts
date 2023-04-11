import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetConnectorsXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GetConnectors = "AWSServerMigrationService_V2016_10_24.GetConnectors"
}
export declare class GetConnectorsRequest extends SpeakeasyBase {
    getConnectorsRequest: shared.GetConnectorsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConnectorsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getConnectorsResponse?: shared.GetConnectorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}

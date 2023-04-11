import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTaskDefinitionsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTaskDefinitions = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"
}
export declare class ListTaskDefinitionsRequest extends SpeakeasyBase {
    listTaskDefinitionsRequest: shared.ListTaskDefinitionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTaskDefinitionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTaskDefinitionsResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listTaskDefinitionsResponse?: shared.ListTaskDefinitionsResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

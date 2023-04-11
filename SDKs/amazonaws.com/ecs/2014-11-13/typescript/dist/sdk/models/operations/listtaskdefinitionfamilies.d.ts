import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTaskDefinitionFamiliesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTaskDefinitionFamilies = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies"
}
export declare class ListTaskDefinitionFamiliesRequest extends SpeakeasyBase {
    listTaskDefinitionFamiliesRequest: shared.ListTaskDefinitionFamiliesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTaskDefinitionFamiliesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTaskDefinitionFamiliesResponse extends SpeakeasyBase {
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
    listTaskDefinitionFamiliesResponse?: shared.ListTaskDefinitionFamiliesResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

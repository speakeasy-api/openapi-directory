import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListClustersXAmzTargetEnum {
    AWSIESnowballJobManagementServiceListClusters = "AWSIESnowballJobManagementService.ListClusters"
}
export declare class ListClustersRequest extends SpeakeasyBase {
    listClustersRequest: shared.ListClustersRequest;
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
    xAmzTarget: ListClustersXAmzTargetEnum;
}
export declare class ListClustersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listClustersResult?: shared.ListClustersResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListClustersXAmzTargetEnum {
    ElasticMapReduceListClusters = "ElasticMapReduce.ListClusters"
}
export declare class ListClustersRequest extends SpeakeasyBase {
    listClustersInput: shared.ListClustersInput;
    /**
     * Pagination token
     */
    marker?: string;
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listClustersOutput?: shared.ListClustersOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

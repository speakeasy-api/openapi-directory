import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInstancesXAmzTargetEnum {
    ElasticMapReduceListInstances = "ElasticMapReduce.ListInstances"
}
export declare class ListInstancesRequest extends SpeakeasyBase {
    listInstancesInput: shared.ListInstancesInput;
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
    xAmzTarget: ListInstancesXAmzTargetEnum;
}
export declare class ListInstancesResponse extends SpeakeasyBase {
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
    listInstancesOutput?: shared.ListInstancesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

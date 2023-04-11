import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInstanceGroupsXAmzTargetEnum {
    ElasticMapReduceListInstanceGroups = "ElasticMapReduce.ListInstanceGroups"
}
export declare class ListInstanceGroupsRequest extends SpeakeasyBase {
    listInstanceGroupsInput: shared.ListInstanceGroupsInput;
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
    xAmzTarget: ListInstanceGroupsXAmzTargetEnum;
}
export declare class ListInstanceGroupsResponse extends SpeakeasyBase {
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
    listInstanceGroupsOutput?: shared.ListInstanceGroupsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

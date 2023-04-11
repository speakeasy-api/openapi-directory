import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBootstrapActionsXAmzTargetEnum {
    ElasticMapReduceListBootstrapActions = "ElasticMapReduce.ListBootstrapActions"
}
export declare class ListBootstrapActionsRequest extends SpeakeasyBase {
    listBootstrapActionsInput: shared.ListBootstrapActionsInput;
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
    xAmzTarget: ListBootstrapActionsXAmzTargetEnum;
}
export declare class ListBootstrapActionsResponse extends SpeakeasyBase {
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
    listBootstrapActionsOutput?: shared.ListBootstrapActionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

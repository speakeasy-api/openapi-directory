import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReleaseLabelsXAmzTargetEnum {
    ElasticMapReduceListReleaseLabels = "ElasticMapReduce.ListReleaseLabels"
}
export declare class ListReleaseLabelsRequest extends SpeakeasyBase {
    listReleaseLabelsInput: shared.ListReleaseLabelsInput;
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
    xAmzTarget: ListReleaseLabelsXAmzTargetEnum;
}
export declare class ListReleaseLabelsResponse extends SpeakeasyBase {
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
    listReleaseLabelsOutput?: shared.ListReleaseLabelsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

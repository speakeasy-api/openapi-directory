import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEngineVersionsXAmzTargetEnum {
    AmazonAthenaListEngineVersions = "AmazonAthena.ListEngineVersions"
}
export declare class ListEngineVersionsRequest extends SpeakeasyBase {
    listEngineVersionsInput: shared.ListEngineVersionsInput;
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
    xAmzTarget: ListEngineVersionsXAmzTargetEnum;
}
export declare class ListEngineVersionsResponse extends SpeakeasyBase {
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
    listEngineVersionsOutput?: shared.ListEngineVersionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListExportsXAmzTargetEnum {
    DynamoDB20120810ListExports = "DynamoDB_20120810.ListExports"
}
export declare class ListExportsRequest extends SpeakeasyBase {
    listExportsInput: shared.ListExportsInput;
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
    xAmzTarget: ListExportsXAmzTargetEnum;
}
export declare class ListExportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listExportsOutput?: shared.ListExportsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

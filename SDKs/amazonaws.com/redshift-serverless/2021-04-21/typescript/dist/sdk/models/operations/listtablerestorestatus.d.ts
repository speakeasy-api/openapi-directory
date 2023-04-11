import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTableRestoreStatusXAmzTargetEnum {
    RedshiftServerlessListTableRestoreStatus = "RedshiftServerless.ListTableRestoreStatus"
}
export declare class ListTableRestoreStatusRequest extends SpeakeasyBase {
    listTableRestoreStatusRequest: shared.ListTableRestoreStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTableRestoreStatusXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTableRestoreStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidPaginationException
     */
    invalidPaginationException?: any;
    /**
     * Success
     */
    listTableRestoreStatusResponse?: shared.ListTableRestoreStatusResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

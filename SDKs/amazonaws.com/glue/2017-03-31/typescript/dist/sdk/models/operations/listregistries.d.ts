import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRegistriesXAmzTargetEnum {
    AWSGlueListRegistries = "AWSGlue.ListRegistries"
}
export declare class ListRegistriesRequest extends SpeakeasyBase {
    listRegistriesInput: shared.ListRegistriesInput;
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
    xAmzTarget: ListRegistriesXAmzTargetEnum;
}
export declare class ListRegistriesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listRegistriesResponse?: shared.ListRegistriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

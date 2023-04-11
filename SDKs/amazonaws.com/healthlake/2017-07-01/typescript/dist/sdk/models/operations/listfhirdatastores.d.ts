import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFHIRDatastoresXAmzTargetEnum {
    HealthLakeListFHIRDatastores = "HealthLake.ListFHIRDatastores"
}
export declare class ListFHIRDatastoresRequest extends SpeakeasyBase {
    listFHIRDatastoresRequest: shared.ListFHIRDatastoresRequest;
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
    xAmzTarget: ListFHIRDatastoresXAmzTargetEnum;
}
export declare class ListFHIRDatastoresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listFHIRDatastoresResponse?: shared.ListFHIRDatastoresResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

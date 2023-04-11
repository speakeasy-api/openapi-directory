import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The file to retrieve.
 */
export declare enum GetReadSetFileEnum {
    Source1 = "SOURCE1",
    Source2 = "SOURCE2",
    Index = "INDEX"
}
export declare class GetReadSetRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The file to retrieve.
     */
    file?: GetReadSetFileEnum;
    /**
     * The read set's ID.
     */
    id: string;
    /**
     * The part number to retrieve.
     */
    partNumber: number;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: string;
}
export declare class GetReadSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    getReadSetResponse?: shared.GetReadSetResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RangeNotSatisfiableException
     */
    rangeNotSatisfiableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

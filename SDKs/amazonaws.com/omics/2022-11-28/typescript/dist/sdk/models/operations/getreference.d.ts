import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The file to retrieve.
 */
export declare enum GetReferenceFileEnum {
    Source = "SOURCE",
    Index = "INDEX"
}
export declare class GetReferenceRequest extends SpeakeasyBase {
    /**
     * The range to retrieve.
     */
    range?: string;
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
    file?: GetReferenceFileEnum;
    /**
     * The reference's ID.
     */
    id: string;
    /**
     * The part number to retrieve.
     */
    partNumber: number;
    /**
     * The reference's store ID.
     */
    referenceStoreId: string;
}
export declare class GetReferenceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getReferenceResponse?: shared.GetReferenceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RangeNotSatisfiableException
     */
    rangeNotSatisfiableException?: any;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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

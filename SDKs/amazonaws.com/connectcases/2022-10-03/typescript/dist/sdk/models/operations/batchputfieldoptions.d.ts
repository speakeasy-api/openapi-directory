import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchPutFieldOptionsRequestBody extends SpeakeasyBase {
    /**
     * A list of <code>FieldOption</code> objects.
     */
    options: shared.FieldOption[];
}
export declare class BatchPutFieldOptionsRequest extends SpeakeasyBase {
    requestBody: BatchPutFieldOptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the Cases domain.
     */
    domainId: string;
    /**
     * The unique identifier of a field.
     */
    fieldId: string;
}
export declare class BatchPutFieldOptionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchPutFieldOptionsResponse?: shared.BatchPutFieldOptionsResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
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

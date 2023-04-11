import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAnnotationStoreRequestBody extends SpeakeasyBase {
    /**
     * A description for the store.
     */
    description?: string;
}
export declare class UpdateAnnotationStoreRequest extends SpeakeasyBase {
    requestBody: UpdateAnnotationStoreRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A name for the store.
     */
    name: string;
}
export declare class UpdateAnnotationStoreResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * Success
     */
    updateAnnotationStoreResponse?: shared.UpdateAnnotationStoreResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

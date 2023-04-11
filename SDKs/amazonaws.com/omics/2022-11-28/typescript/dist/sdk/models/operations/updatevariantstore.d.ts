import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVariantStoreRequestBody extends SpeakeasyBase {
    /**
     * A description for the store.
     */
    description?: string;
}
export declare class UpdateVariantStoreRequest extends SpeakeasyBase {
    requestBody: UpdateVariantStoreRequestBody;
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
export declare class UpdateVariantStoreResponse extends SpeakeasyBase {
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
    updateVariantStoreResponse?: shared.UpdateVariantStoreResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

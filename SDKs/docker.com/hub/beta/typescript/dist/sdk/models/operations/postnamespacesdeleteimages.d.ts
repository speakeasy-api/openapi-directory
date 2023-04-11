import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostNamespacesDeleteImagesRequest extends SpeakeasyBase {
    /**
     * Delete request.
     */
    postNamespacesDeleteImagesRequest: shared.PostNamespacesDeleteImagesRequest;
    /**
     * Namespace of the repository.
     */
    namespace: string;
}
export declare class PostNamespacesDeleteImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden - this API is only available to users on Pro or Team plans
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Deletion not possible
     */
    postNamespacesDeleteImagesResponseError?: shared.PostNamespacesDeleteImagesResponseError;
    /**
     * Deletion completed
     */
    postNamespacesDeleteImagesResponseSuccess?: shared.PostNamespacesDeleteImagesResponseSuccess;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamespacesRepositoriesImagesSummaryRequest extends SpeakeasyBase {
    /**
     * Sets the time from which an image must have been pushed or pulled to
     *
     * @remarks
     * be counted as active.
     *
     * Defaults to 1 month before the current time.
     *
     */
    activeFrom?: string;
    /**
     * Namespace of the repository.
     */
    namespace: string;
    /**
     * Name of the repository.
     */
    repository: string;
}
export declare class GetNamespacesRepositoriesImagesSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized - user does not have read access to the namespace
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Success
     */
    getNamespaceRepositoryImagesSummaryResponse?: shared.GetNamespaceRepositoryImagesSummaryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HeadV2NamespacesNamespaceRepositoriesRepositoryTagsRequest extends SpeakeasyBase {
    namespace: string;
    repository: string;
}
export declare class HeadV2NamespacesNamespaceRepositoriesRepositoryTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

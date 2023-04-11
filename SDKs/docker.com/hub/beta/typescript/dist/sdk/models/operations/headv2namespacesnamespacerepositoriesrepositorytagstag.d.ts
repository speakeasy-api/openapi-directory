import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest extends SpeakeasyBase {
    namespace: string;
    repository: string;
    tag: string;
}
export declare class HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

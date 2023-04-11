import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamespaceRequest extends SpeakeasyBase {
    /**
     * Namespace to fetch data for
     */
    namespace: string;
}
export declare class GetNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    namespaceMetadata?: shared.NamespaceMetadata;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

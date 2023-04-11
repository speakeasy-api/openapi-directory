import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamespacesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    namespaceData?: shared.NamespaceData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

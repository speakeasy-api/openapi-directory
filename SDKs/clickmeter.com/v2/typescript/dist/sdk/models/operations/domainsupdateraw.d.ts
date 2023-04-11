import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DomainsUpdateRawRequest extends SpeakeasyBase {
    /**
     * The domain to update
     */
    requestBody: Uint8Array;
    /**
     * Id of domain
     */
    id: number;
}
export declare class DomainsUpdateRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

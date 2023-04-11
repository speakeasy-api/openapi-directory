import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DomainsUpdateJsonRequest extends SpeakeasyBase {
    /**
     * The domain to update
     */
    apiCoreDtoDomainsDomain: shared.ApiCoreDtoDomainsDomain;
    /**
     * Id of domain
     */
    id: number;
}
export declare class DomainsUpdateJsonResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

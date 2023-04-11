import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainsIdRequest extends SpeakeasyBase {
    /**
     * Id of domain
     */
    id: number;
}
export declare class GetDomainsIdResponse extends SpeakeasyBase {
    apiCoreDtoDomainsDomain?: shared.ApiCoreDtoDomainsDomain;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAs2PartnersRequestBody extends SpeakeasyBase {
    /**
     * Id of As2Station for this partner
     */
    as2StationId: number;
    /**
     * AS2 Name
     */
    name: string;
    publicCertificate: string;
    /**
     * Remote server certificate security setting
     */
    serverCertificate?: string;
    /**
     * URL base for AS2 responses
     */
    uri: string;
}
export declare class PostAs2PartnersResponse extends SpeakeasyBase {
    /**
     * The As2Partners object.
     */
    as2PartnerEntity?: shared.As2PartnerEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

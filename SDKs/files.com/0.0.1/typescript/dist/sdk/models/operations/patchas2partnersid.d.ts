import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchAs2PartnersIdRequestBody extends SpeakeasyBase {
    /**
     * AS2 Name
     */
    name?: string;
    publicCertificate?: string;
    /**
     * Remote server certificate security setting
     */
    serverCertificate?: string;
    /**
     * URL base for AS2 responses
     */
    uri?: string;
}
export declare class PatchAs2PartnersIdRequest extends SpeakeasyBase {
    requestBody?: PatchAs2PartnersIdRequestBody;
    /**
     * As2 Partner ID.
     */
    id: number;
}
export declare class PatchAs2PartnersIdResponse extends SpeakeasyBase {
    /**
     * The As2Partners object.
     */
    as2PartnerEntity?: shared.As2PartnerEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

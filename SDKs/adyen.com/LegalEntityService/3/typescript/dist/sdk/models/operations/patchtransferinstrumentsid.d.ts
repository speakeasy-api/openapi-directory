import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTransferInstrumentsIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchTransferInstrumentsIdRequest extends SpeakeasyBase {
    transferInstrumentInfo?: shared.TransferInstrumentInfo;
    /**
     * The unique identifier of the transfer instrument.
     */
    id: string;
}
export declare class PatchTransferInstrumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    /**
     * OK - the request has succeeded.
     */
    transferInstrument?: shared.TransferInstrument;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTransferInstrumentsIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class DeleteTransferInstrumentsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the transfer instrument to be deleted.
     */
    id: string;
}
export declare class DeleteTransferInstrumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

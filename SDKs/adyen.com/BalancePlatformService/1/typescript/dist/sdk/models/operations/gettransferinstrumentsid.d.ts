import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransferInstrumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTransferInstrumentsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetTransferInstrumentsIdRequest extends SpeakeasyBase {
    pathParams: GetTransferInstrumentsIdPathParams;
    security: GetTransferInstrumentsIdSecurity;
}
export declare class GetTransferInstrumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    transferInstrument?: any;
}

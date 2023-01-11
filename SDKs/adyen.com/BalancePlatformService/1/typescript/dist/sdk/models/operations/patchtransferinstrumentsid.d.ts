import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTransferInstrumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchTransferInstrumentsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PatchTransferInstrumentsIdRequest extends SpeakeasyBase {
    pathParams: PatchTransferInstrumentsIdPathParams;
    request?: any;
    security: PatchTransferInstrumentsIdSecurity;
}
export declare class PatchTransferInstrumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    transferInstrument?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTransferInstrumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteTransferInstrumentsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class DeleteTransferInstrumentsIdRequest extends SpeakeasyBase {
    pathParams: DeleteTransferInstrumentsIdPathParams;
    security: DeleteTransferInstrumentsIdSecurity;
}
export declare class DeleteTransferInstrumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    voidResponse?: any;
}

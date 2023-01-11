import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransferInstrumentsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostTransferInstrumentsRequest extends SpeakeasyBase {
    request?: any;
    security: PostTransferInstrumentsSecurity;
}
export declare class PostTransferInstrumentsResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    transferInstrument?: any;
}

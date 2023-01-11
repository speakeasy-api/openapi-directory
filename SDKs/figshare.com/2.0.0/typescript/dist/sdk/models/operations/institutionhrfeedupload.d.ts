import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InstitutionHrfeedUploadRequestBodyHrfeed extends SpeakeasyBase {
    content: Uint8Array;
    hrfeed: string;
}
export declare class InstitutionHrfeedUploadRequestBody extends SpeakeasyBase {
    hrfeed?: InstitutionHrfeedUploadRequestBodyHrfeed;
}
export declare class InstitutionHrfeedUploadSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class InstitutionHrfeedUploadRequest extends SpeakeasyBase {
    request?: InstitutionHrfeedUploadRequestBody;
    security: InstitutionHrfeedUploadSecurity;
}
export declare class InstitutionHrfeedUploadResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    responseMessage?: shared.ResponseMessage;
    statusCode: number;
}

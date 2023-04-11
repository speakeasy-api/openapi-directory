import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InstitutionHrfeedUploadSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class InstitutionHrfeedUploadRequestBodyHrfeed extends SpeakeasyBase {
    content: Uint8Array;
    hrfeed: string;
}
export declare class InstitutionHrfeedUploadRequestBody extends SpeakeasyBase {
    /**
     * You can find an example in the Hr Feed section
     */
    hrfeed?: InstitutionHrfeedUploadRequestBodyHrfeed;
}
export declare class InstitutionHrfeedUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK
     */
    responseMessage?: shared.ResponseMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

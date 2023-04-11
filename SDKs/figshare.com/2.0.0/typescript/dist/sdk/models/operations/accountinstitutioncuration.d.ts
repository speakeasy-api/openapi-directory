import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountInstitutionCurationSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class AccountInstitutionCurationRequest extends SpeakeasyBase {
    /**
     * ID of the curation
     */
    curationId: number;
}
export declare class AccountInstitutionCurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. A curation review.
     */
    curationDetail?: shared.CurationDetail;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

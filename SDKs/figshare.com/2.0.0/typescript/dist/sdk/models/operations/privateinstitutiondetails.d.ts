import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of institutions
     */
    institution?: shared.Institution;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

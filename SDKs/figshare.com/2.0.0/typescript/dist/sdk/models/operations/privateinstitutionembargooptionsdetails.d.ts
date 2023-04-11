import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionEmbargoOptionsDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of embargo options
     */
    groupEmbargoOptions?: shared.GroupEmbargoOptions[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

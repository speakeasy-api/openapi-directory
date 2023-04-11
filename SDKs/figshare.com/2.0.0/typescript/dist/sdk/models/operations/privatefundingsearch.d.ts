import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateFundingSearchSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateFundingSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of funding information
     */
    fundingInformations?: shared.FundingInformation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

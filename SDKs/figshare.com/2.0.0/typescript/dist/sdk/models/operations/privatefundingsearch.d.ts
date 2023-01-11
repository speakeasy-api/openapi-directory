import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateFundingSearchSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateFundingSearchRequest extends SpeakeasyBase {
    request?: shared.FundingSearch;
    security: PrivateFundingSearchSecurity;
}
export declare class PrivateFundingSearchResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    fundingInformations?: shared.FundingInformation[];
    statusCode: number;
}

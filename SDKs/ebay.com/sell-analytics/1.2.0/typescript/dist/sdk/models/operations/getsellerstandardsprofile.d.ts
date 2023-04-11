import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSellerStandardsProfileSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetSellerStandardsProfileRequest extends SpeakeasyBase {
    /**
     * The period covered by the returned standards profile evaluation. Supply one of two values, CURRENT means the response reflects eBay's most recent monthly standards evaluation and PROJECTED means the response reflect the seller's projected monthly evaluation, as calculated at the time of the request.
     */
    cycle: string;
    /**
     * This input value specifies the region used to determine the seller's standards profile. Supply one of the four following values, PROGRAM_DE, PROGRAM_UK, PROGRAM_US, or PROGRAM_GLOBAL.
     */
    program: string;
}
export declare class GetSellerStandardsProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    standardsProfile?: shared.StandardsProfile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

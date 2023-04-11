import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicensesGetAllCommonlyUsedRequest extends SpeakeasyBase {
    featured?: boolean;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
export declare class LicensesGetAllCommonlyUsedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    licenseSimples?: shared.LicenseSimple[];
}

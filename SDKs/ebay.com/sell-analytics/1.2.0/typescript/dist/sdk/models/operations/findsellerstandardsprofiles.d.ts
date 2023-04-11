import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindSellerStandardsProfilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    findSellerStandardsProfilesResponse?: shared.FindSellerStandardsProfilesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

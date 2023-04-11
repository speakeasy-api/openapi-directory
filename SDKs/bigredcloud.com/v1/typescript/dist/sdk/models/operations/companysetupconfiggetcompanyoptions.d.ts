import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompanySetupConfigGetCompanyOptionsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    companyOptionDto?: shared.CompanyOptionDto;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

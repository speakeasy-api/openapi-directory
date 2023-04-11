import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompanySetupConfigGetResponse extends SpeakeasyBase {
    /**
     * OK
     */
    companySetupConfigViewModel?: shared.CompanySetupConfigViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

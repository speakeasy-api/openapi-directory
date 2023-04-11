import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompanySettingsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultCompanySettingDto?: shared.PageResultCompanySettingDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

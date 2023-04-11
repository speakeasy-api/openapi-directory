import { SpeakeasyBase } from "../../../internal/utils";
import { CompanySettingDto } from "./companysettingdto";
/**
 * OK
 */
export declare class PageResultCompanySettingDto extends SpeakeasyBase {
    count?: number;
    items?: CompanySettingDto[];
    nextPageLink?: string;
}

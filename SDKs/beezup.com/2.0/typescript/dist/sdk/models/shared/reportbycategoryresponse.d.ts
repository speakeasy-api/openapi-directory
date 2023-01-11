import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByCategory } from "./reportbycategory";
import { ReportByCommonResponseLinks } from "./reportbycommonresponselinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
export declare class ReportByCategoryResponse extends SpeakeasyBase {
    categories?: ReportByCategory[];
    currencyCode?: string;
    links?: ReportByCommonResponseLinks;
    paginationResult?: BeezUpCommonPaginationResult;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ReportByCategory } from "./reportbycategory";
import { ReportByCommonResponseLinks } from "./reportbycommonresponselinks";
/**
 * Your reporting by channel
 */
export declare class ReportByCategoryResponse extends SpeakeasyBase {
    categories?: ReportByCategory[];
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode?: string;
    links?: ReportByCommonResponseLinks;
    paginationResult?: BeezUPCommonPaginationResult;
}

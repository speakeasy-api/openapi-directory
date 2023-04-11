import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ReportByCommonResponseLinks } from "./reportbycommonresponselinks";
import { ReportByProduct } from "./reportbyproduct";
/**
 * Your reporting by product
 */
export declare class ReportByProductResponse extends SpeakeasyBase {
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode: string;
    links: ReportByCommonResponseLinks;
    paginationResult: BeezUPCommonPaginationResult;
    products: ReportByProduct[];
}

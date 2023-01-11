import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByCommonResponseLinks } from "./reportbycommonresponselinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ReportByProduct } from "./reportbyproduct";
export declare class ReportByProductResponse extends SpeakeasyBase {
    currencyCode: string;
    links: ReportByCommonResponseLinks;
    paginationResult: BeezUpCommonPaginationResult;
    products: ReportByProduct[];
}

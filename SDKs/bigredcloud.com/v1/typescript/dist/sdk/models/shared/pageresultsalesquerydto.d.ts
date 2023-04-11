import { SpeakeasyBase } from "../../../internal/utils";
import { SalesQueryDto } from "./salesquerydto";
/**
 * OK
 */
export declare class PageResultSalesQueryDto extends SpeakeasyBase {
    count?: number;
    items?: SalesQueryDto[];
    nextPageLink?: string;
}

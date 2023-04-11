import { SpeakeasyBase } from "../../../internal/utils";
import { SalesEntryQueryDto } from "./salesentryquerydto";
/**
 * OK
 */
export declare class PageResultSalesEntryQueryDto extends SpeakeasyBase {
    count?: number;
    items?: SalesEntryQueryDto[];
    nextPageLink?: string;
}

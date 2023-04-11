import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerQueryDto } from "./customerquerydto";
/**
 * OK
 */
export declare class PageResultCustomerQueryDto extends SpeakeasyBase {
    count?: number;
    items?: CustomerQueryDto[];
    nextPageLink?: string;
}

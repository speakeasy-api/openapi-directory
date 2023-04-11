import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountQueryDto } from "./bankaccountquerydto";
/**
 * OK
 */
export declare class PageResultBankAccountQueryDto extends SpeakeasyBase {
    count?: number;
    items?: BankAccountQueryDto[];
    nextPageLink?: string;
}

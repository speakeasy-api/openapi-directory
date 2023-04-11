import { SpeakeasyBase } from "../../../internal/utils";
import { EFTBankDto } from "./eftbankdto";
import { OwnerOpeningBalanceDto } from "./owneropeningbalancedto";
import { OwnerOpeningBalanceInPeriodsDto } from "./owneropeningbalanceinperiodsdto";
/**
 * Information of Customer to create.
 */
export declare class CustomerDto extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    additionalEmails?: string[];
    address?: string[];
    authCode?: string;
    bank?: EFTBankDto;
    businessIdentifierCode?: string;
    code?: string;
    contact?: string;
    delivery?: string[];
    eFTReference?: string;
    email?: string;
    fax?: string;
    id?: number;
    internationalBankAccountNumber?: string;
    ledgerBalance?: number;
    mobile?: string;
    name?: string;
    openingBalance?: OwnerOpeningBalanceInPeriodsDto;
    openingBalances?: OwnerOpeningBalanceDto[];
    ourCode?: string;
    ownerTypeId?: number;
    phone?: string;
    timestamp?: string;
    vatAnalysisTypeId?: number;
    vatReg?: string;
    vatType?: number;
}

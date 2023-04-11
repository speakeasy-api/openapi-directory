import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class CompanyOptionDto extends SpeakeasyBase {
    allowEntryOfGrossPriceInInvoicing?: boolean;
    creditInputForReverseChargeVAT?: boolean;
    creditNoteJournalAgeingName?: string;
    creditNoteJournalAgeingValue?: number;
    discrepancyAllowed?: number;
    enableVOCRReporting?: boolean;
    marginVatScheme?: boolean;
    printOSItemsOnly?: boolean;
    purchasesVatAnalysisType?: number;
    salesVatAnalysisType?: number;
    useAllocations?: boolean;
    useNominal?: boolean;
    useNominalCode?: boolean;
    vocrSettingValue?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentVatRateSummary } from "./documentvatratesummary";
export declare class DocumentSummary extends SpeakeasyBase {
    grossAmountLocal?: number;
    netAmount?: number;
    netAmountLocal?: number;
    vatAmount?: number;
    vatAmountLocal?: number;
    vatRateSummary?: DocumentVatRateSummary[];
}

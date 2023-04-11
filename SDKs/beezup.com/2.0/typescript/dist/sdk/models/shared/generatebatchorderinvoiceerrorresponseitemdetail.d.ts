import { SpeakeasyBase } from "../../../internal/utils";
import { GenerateBatchOrderInvoiceRequestItem } from "./generatebatchorderinvoicerequestitem";
import { UserErrorMessage } from "./usererrormessage";
export declare class GenerateBatchOrderInvoiceErrorResponseItemDetail extends SpeakeasyBase {
    errorMessage?: UserErrorMessage;
    request?: GenerateBatchOrderInvoiceRequestItem;
}

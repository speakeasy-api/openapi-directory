import { SpeakeasyBase } from "../../../internal/utils";
import { SalesInvoiceCreditNoteDto } from "./salesinvoicecreditnotedto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemSalesInvoiceCreditNoteDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemSalesInvoiceCreditNoteDto extends SpeakeasyBase {
    item?: SalesInvoiceCreditNoteDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemSalesInvoiceCreditNoteDtoOpCodeEnum;
}

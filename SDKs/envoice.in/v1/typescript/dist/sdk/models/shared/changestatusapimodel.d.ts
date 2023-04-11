import { SpeakeasyBase } from "../../../internal/utils";
/**
 * New status of the invoice
 */
export declare enum ChangeStatusApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class ChangeStatusApiModel extends SpeakeasyBase {
    /**
     * Invoice Id
     */
    id?: number;
    /**
     * New status of the invoice
     */
    status?: ChangeStatusApiModelStatusEnum;
}

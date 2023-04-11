import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful DELETE on TransactionInformation resource
 */
export declare class TransactionInformation extends SpeakeasyBase {
    /**
     * ID of this transaction information
     */
    id: number;
    /**
     * ID of the related transaction
     */
    idTransaction: number;
    /**
     * Key of the transaction information
     */
    key: string;
    /**
     * Value of the transaction information
     */
    value?: string;
}

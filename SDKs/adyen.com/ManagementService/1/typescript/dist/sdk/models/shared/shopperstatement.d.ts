import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of shopperstatement you want to use: fixed, append or dynamic
 */
export declare enum ShopperStatementTypeEnum {
    Append = "append",
    Dynamic = "dynamic",
    Fixed = "fixed"
}
export declare class ShopperStatement extends SpeakeasyBase {
    /**
     * The name you want to be shown on the shopper's bank or credit card statement. Can't be all numbers. If a shopper statement is present, this field is required.
     */
    doingBusinessAsName?: string;
    /**
     * The type of shopperstatement you want to use: fixed, append or dynamic
     */
    type?: ShopperStatementTypeEnum;
}

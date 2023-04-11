import { SpeakeasyBase } from "../../../internal/utils";
import { Transactions } from "./transactions";
/**
 * Type of subbalance (sub account)
 */
export declare enum BalanceVariationEnum {
    Gsb = "gsb",
    Erzeugung = "erzeugung",
    Eigenstrom = "eigenstrom",
    Co2 = "co2",
    Baeume = "baeume"
}
export declare class Balance extends SpeakeasyBase {
    /**
     * Sum owned - sum due by account
     */
    balance?: number;
    /**
     * Sum owned by account
     */
    haben?: number;
    /**
     * Sum due by account
     */
    soll?: number;
    txs?: Transactions[];
    /**
     * Type of subbalance (sub account)
     */
    variation?: BalanceVariationEnum;
}

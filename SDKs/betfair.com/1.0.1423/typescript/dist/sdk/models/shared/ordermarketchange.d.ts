import { SpeakeasyBase } from "../../../internal/utils";
import { OrderRunnerChange } from "./orderrunnerchange";
export declare class OrderMarketChange extends SpeakeasyBase {
    accountId?: number;
    closed?: boolean;
    fullImage?: boolean;
    /**
     * Market Id - the id of the market the order is on
     */
    id?: string;
    /**
     * Order Changes - a list of changes to orders on a selection
     */
    orc?: OrderRunnerChange[];
}

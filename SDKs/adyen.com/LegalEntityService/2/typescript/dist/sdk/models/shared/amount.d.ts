import { SpeakeasyBase } from "../../../internal/utils";
export declare class Amount extends SpeakeasyBase {
    /**
     * The type of currency. Must be EUR (or EUR equivalent)
     */
    currency?: string;
    /**
     * Total value of amount. Must be >= 0
     */
    value?: number;
}

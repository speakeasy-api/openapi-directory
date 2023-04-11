import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information about the sign-in attempt
 */
export declare class Details extends SpeakeasyBase {
    /**
     * For firewall prevented sign-ins, the value is the chosen continent, country, etc. that blocked the sign-in attempt
     */
    value?: string;
}

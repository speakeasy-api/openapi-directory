import { SpeakeasyBase } from "../../../internal/utils";
import { FeeTypeEnum } from "./feetypeenum";
/**
 * a fee
 */
export declare class Fee extends SpeakeasyBase {
    amount?: string;
    /**
     * type of fee
     */
    type?: FeeTypeEnum;
}

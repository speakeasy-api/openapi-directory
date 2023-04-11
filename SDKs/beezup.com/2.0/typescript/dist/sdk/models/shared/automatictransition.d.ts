import { SpeakeasyBase } from "../../../internal/utils";
export declare class AutomaticTransition extends SpeakeasyBase {
    /**
     * The marketplace account identifier in BeezUP. This account identifier is based on your api settings.
     */
    accountId: number;
    enabled: boolean;
    /**
     * The technical code of the marketplace.
     */
    marketplaceTechnicalCode: string;
    orderStatusTransitionId: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The region of operation. For example, **NA**, **EU**, **CH**, **AU**.
 */
export declare enum KlarnaInfoRegionEnum {
    Na = "NA",
    Eu = "EU",
    Ch = "CH",
    Au = "AU"
}
export declare class KlarnaInfo extends SpeakeasyBase {
    /**
     * Indicates the status of [Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture). Default value: **false**.
     */
    autoCapture?: boolean;
    /**
     * The email address for disputes.
     */
    disputeEmail: string;
    /**
     * The region of operation. For example, **NA**, **EU**, **CH**, **AU**.
     */
    region?: KlarnaInfoRegionEnum;
    /**
     * The email address of merchant support.
     */
    supportEmail: string;
}

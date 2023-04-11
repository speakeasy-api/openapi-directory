import { SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
/**
 * <p>Contains the details for the read/write capacity mode. This page talks about <code>PROVISIONED</code> and <code>PAY_PER_REQUEST</code> billing modes. For more information about these modes, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html">Read/write capacity mode</a>.</p> <note> <p>You may need to switch to on-demand mode at least once in order to return a <code>BillingModeSummary</code> response.</p> </note>
 */
export declare class BillingModeSummary extends SpeakeasyBase {
    billingMode?: BillingModeEnum;
    lastUpdateToPayPerRequestDateTime?: Date;
}

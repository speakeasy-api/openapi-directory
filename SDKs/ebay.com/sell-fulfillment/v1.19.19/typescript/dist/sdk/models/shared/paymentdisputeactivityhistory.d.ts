import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDisputeActivity } from "./paymentdisputeactivity";
/**
 * This type is used by the base response of the <strong>getActivities</strong> method, and includes a log of all activities of a payment dispute, from creation to resolution.
 */
export declare class PaymentDisputeActivityHistory extends SpeakeasyBase {
    /**
     * This array holds all activities of a payment dispute, from creation to resolution. For each activity, the activity type, the actor, and a timestamp is shown. The <strong>getActivities</strong> response is dynamic, and grows with each recorded activity.
     */
    activity?: PaymentDisputeActivity[];
}

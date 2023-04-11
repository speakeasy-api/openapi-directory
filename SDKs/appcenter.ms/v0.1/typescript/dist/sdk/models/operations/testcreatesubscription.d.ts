import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestCreateSubscriptionSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestCreateSubscriptionRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class TestCreateSubscriptionSubscriptionSubscriptionTier extends SpeakeasyBase {
    /**
     * The name of the tier
     */
    name?: string;
}
/**
 * Subscription information
 */
export declare class TestCreateSubscriptionSubscription extends SpeakeasyBase {
    /**
     * Is the subscription currently active?
     */
    active?: boolean;
    /**
     * Customer limits on concurrent devices
     */
    concurrentDevicesLimit?: number;
    /**
     * The number of days left in the subscription
     */
    daysLeft?: number;
    /**
     * The date the subscription will end or ended
     */
    endsAt?: string;
    /**
     * Id of the subscription
     */
    id?: string;
    /**
     * Current device concurrency utilization
     */
    runningDevices?: number;
    /**
     * The date the subscription began
     */
    startsAt?: string;
    tier?: TestCreateSubscriptionSubscriptionSubscriptionTier;
}
export declare class TestCreateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    subscription?: TestCreateSubscriptionSubscription;
}

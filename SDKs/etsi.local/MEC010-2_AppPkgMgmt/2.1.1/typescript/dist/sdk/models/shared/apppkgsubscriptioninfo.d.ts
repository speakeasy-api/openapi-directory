import { SpeakeasyBase } from "../../../internal/utils";
import { AppPkgSubscriptionInfoLinks } from "./apppkgsubscriptioninfolinks";
import { AppPkgSubscriptionTypeEnum } from "./apppkgsubscriptiontypeenum";
/**
 * 'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'
 */
export declare class AppPkgSubscriptionInfo extends SpeakeasyBase {
    /**
     * Links to resources related to this resource.
     */
    links: AppPkgSubscriptionInfoLinks;
    /**
     * The URI of the endpoint for the notification to be sent to.
     */
    callbackUri: string;
    /**
     * ''
     */
    id: string;
    /**
     * Subscribed notification type.
     */
    subscriptionType: AppPkgSubscriptionTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { SubsctiptionTypeAppPkgEnum } from "./subsctiptiontypeapppkgenum";
/**
 * 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.'
 */
export declare class AppPkgSubscription extends SpeakeasyBase {
    appPkgFilter?: string[];
    /**
     * The URI of the endpoint for the notification to be sent to.
     */
    callbackUri: string;
    /**
     * 'Subscribed notification type'
     */
    subsctiptionType: SubsctiptionTypeAppPkgEnum;
}

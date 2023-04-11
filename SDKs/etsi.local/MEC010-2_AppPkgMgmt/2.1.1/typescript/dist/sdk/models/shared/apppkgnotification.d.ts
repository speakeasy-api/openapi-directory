import { SpeakeasyBase } from "../../../internal/utils";
import { AppPkgNotificationLinks } from "./apppkgnotificationlinks";
import { AppPkgNotificationTypeEnum } from "./apppkgnotificationtypeenum";
import { TimeStamp } from "./timestamp";
export declare enum AppPkgNotificationOperationalStateEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * 'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'
 */
export declare class AppPkgNotification extends SpeakeasyBase {
    /**
     * Links to resources related to this resource.
     */
    links: AppPkgNotificationLinks;
    /**
     * Identifier of this MEC application descriptor. This attribute shall be globally unique.
     */
    appDId: string;
    /**
     * Identifier of the onboarded application package.
     */
    appPkgId: string;
    /**
     * ''
     */
    id: string;
    /**
     * Discriminator for the different notification types
     */
    notificationType: AppPkgNotificationTypeEnum;
    operationalState: AppPkgNotificationOperationalStateEnum;
    /**
     * Identifier of the subscription related to this notification.
     */
    subscriptionId: string;
    timeStamp: TimeStamp;
}

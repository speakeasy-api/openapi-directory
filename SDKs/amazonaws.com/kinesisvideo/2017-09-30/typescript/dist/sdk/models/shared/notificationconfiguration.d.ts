import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatusEnum } from "./configurationstatusenum";
import { NotificationDestinationConfig } from "./notificationdestinationconfig";
/**
 * The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.
 */
export declare class NotificationConfiguration extends SpeakeasyBase {
    destinationConfig: NotificationDestinationConfig;
    status: ConfigurationStatusEnum;
}

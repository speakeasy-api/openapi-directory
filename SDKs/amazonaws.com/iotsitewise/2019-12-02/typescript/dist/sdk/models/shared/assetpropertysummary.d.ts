import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyNotification } from "./propertynotification";
/**
 * Contains a summary of a property associated with an asset.
 */
export declare class AssetPropertySummary extends SpeakeasyBase {
    alias?: string;
    assetCompositeModelId?: string;
    id?: string;
    /**
     * Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.
     */
    notification?: PropertyNotification;
    unit?: string;
}

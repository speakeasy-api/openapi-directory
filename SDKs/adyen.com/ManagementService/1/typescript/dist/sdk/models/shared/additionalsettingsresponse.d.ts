import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdditionalSettingsResponse extends SpeakeasyBase {
    /**
     * Object containing list of event codes for which the notifcation will not be sent.
     */
    excludeEventCodes?: string[];
    /**
     * Object containing list of event codes for which the notifcation will be sent.
     */
    includeEventCodes?: string[];
    /**
     * Object containing boolean key-value pairs. The key can be any [standard webhook additional setting](https://docs.adyen.com/development-resources/webhooks/additional-settings), and the value indicates if the setting is enabled.
     *
     * @remarks
     * For example, `captureDelayHours`: **true** means the standard notifications you get will contain the number of hours remaining until the payment will be captured.
     */
    properties?: Record<string, boolean>;
}

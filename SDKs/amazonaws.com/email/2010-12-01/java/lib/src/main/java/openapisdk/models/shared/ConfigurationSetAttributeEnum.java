package openapisdk.models.shared;


public enum ConfigurationSetAttributeEnum {
    EVENT_DESTINATIONS("eventDestinations"),
    TRACKING_OPTIONS("trackingOptions"),
    DELIVERY_OPTIONS("deliveryOptions"),
    REPUTATION_OPTIONS("reputationOptions");

    public final String value;

    private ConfigurationSetAttributeEnum(String value) {
        this.value = value;
    }
}

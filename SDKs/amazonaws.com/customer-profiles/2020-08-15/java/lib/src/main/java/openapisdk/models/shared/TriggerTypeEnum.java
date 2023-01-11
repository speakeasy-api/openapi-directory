package openapisdk.models.shared;


public enum TriggerTypeEnum {
    SCHEDULED("Scheduled"),
    EVENT("Event"),
    ON_DEMAND("OnDemand");

    public final String value;

    private TriggerTypeEnum(String value) {
        this.value = value;
    }
}

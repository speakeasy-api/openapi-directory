package openapisdk.models.shared;


public enum TriggerTypeEnum {
    SCHEDULED("SCHEDULED"),
    CONDITIONAL("CONDITIONAL"),
    ON_DEMAND("ON_DEMAND"),
    EVENT("EVENT");

    public final String value;

    private TriggerTypeEnum(String value) {
        this.value = value;
    }
}

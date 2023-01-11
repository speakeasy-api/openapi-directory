package openapisdk.models.shared;


public enum AlarmModelVersionStatusEnum {
    ACTIVE("ACTIVE"),
    ACTIVATING("ACTIVATING"),
    INACTIVE("INACTIVE"),
    FAILED("FAILED");

    public final String value;

    private AlarmModelVersionStatusEnum(String value) {
        this.value = value;
    }
}

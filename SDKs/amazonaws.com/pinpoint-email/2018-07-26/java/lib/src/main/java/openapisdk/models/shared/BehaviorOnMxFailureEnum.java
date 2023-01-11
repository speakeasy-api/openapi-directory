package openapisdk.models.shared;


public enum BehaviorOnMxFailureEnum {
    USE_DEFAULT_VALUE("USE_DEFAULT_VALUE"),
    REJECT_MESSAGE("REJECT_MESSAGE");

    public final String value;

    private BehaviorOnMxFailureEnum(String value) {
        this.value = value;
    }
}

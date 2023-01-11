package openapisdk.models.shared;


public enum BehaviorOnMxFailureEnum {
    USE_DEFAULT_VALUE("UseDefaultValue"),
    REJECT_MESSAGE("RejectMessage");

    public final String value;

    private BehaviorOnMxFailureEnum(String value) {
        this.value = value;
    }
}

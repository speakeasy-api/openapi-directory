package openapisdk.models.shared;


public enum TargetRoleEnum {
    READ_WRITE("READ_WRITE"),
    READ_ONLY("READ_ONLY"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private TargetRoleEnum(String value) {
        this.value = value;
    }
}

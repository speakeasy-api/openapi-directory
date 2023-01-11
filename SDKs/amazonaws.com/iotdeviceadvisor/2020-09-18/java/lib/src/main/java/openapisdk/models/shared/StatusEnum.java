package openapisdk.models.shared;


public enum StatusEnum {
    PASS("PASS"),
    FAIL("FAIL"),
    CANCELED("CANCELED"),
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    PASS_WITH_WARNINGS("PASS_WITH_WARNINGS"),
    ERROR("ERROR");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum SuiteRunStatusEnum {
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

    private SuiteRunStatusEnum(String value) {
        this.value = value;
    }
}

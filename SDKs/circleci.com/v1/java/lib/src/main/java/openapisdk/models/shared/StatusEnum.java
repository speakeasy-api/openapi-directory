package openapisdk.models.shared;


public enum StatusEnum {
    RETRIED("retried"),
    CANCELED("canceled"),
    INFRASTRUCTURE_FAIL("infrastructure_fail"),
    TIMEDOUT("timedout"),
    NOT_RUN("not_run"),
    RUNNING("running"),
    FAILED("failed"),
    QUEUED("queued"),
    SCHEDULED("scheduled"),
    NOT_RUNNING("not_running"),
    NO_TESTS("no_tests"),
    FIXED("fixed"),
    SUCCESS("success");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}

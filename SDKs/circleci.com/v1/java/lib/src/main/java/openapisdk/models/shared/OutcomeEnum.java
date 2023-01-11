package openapisdk.models.shared;


public enum OutcomeEnum {
    CANCELED("canceled"),
    INFRASTRUCTURE_FAIL("infrastructure_fail"),
    TIMEDOUT("timedout"),
    FAILED("failed"),
    NO_TESTS("no_tests"),
    SUCCESS("success");

    public final String value;

    private OutcomeEnum(String value) {
        this.value = value;
    }
}

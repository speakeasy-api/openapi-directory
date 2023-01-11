package openapisdk.models.operations;


public enum ChecksCreateRequestBodyConclusionEnum {
    ACTION_REQUIRED("action_required"),
    CANCELLED("cancelled"),
    FAILURE("failure"),
    NEUTRAL("neutral"),
    SUCCESS("success"),
    SKIPPED("skipped"),
    STALE("stale"),
    TIMED_OUT("timed_out");

    public final String value;

    private ChecksCreateRequestBodyConclusionEnum(String value) {
        this.value = value;
    }
}

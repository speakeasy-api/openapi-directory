package openapisdk.models.shared;


public enum CheckRunConclusionEnum {
    SUCCESS("success"),
    FAILURE("failure"),
    NEUTRAL("neutral"),
    CANCELLED("cancelled"),
    SKIPPED("skipped"),
    TIMED_OUT("timed_out"),
    ACTION_REQUIRED("action_required");

    public final String value;

    private CheckRunConclusionEnum(String value) {
        this.value = value;
    }
}

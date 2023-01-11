package openapisdk.models.shared;


public enum MatchmakingConfigurationStatusEnum {
    CANCELLED("CANCELLED"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    PLACING("PLACING"),
    QUEUED("QUEUED"),
    REQUIRES_ACCEPTANCE("REQUIRES_ACCEPTANCE"),
    SEARCHING("SEARCHING"),
    TIMED_OUT("TIMED_OUT");

    public final String value;

    private MatchmakingConfigurationStatusEnum(String value) {
        this.value = value;
    }
}

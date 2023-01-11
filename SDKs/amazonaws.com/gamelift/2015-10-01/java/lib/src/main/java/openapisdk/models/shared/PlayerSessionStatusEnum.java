package openapisdk.models.shared;


public enum PlayerSessionStatusEnum {
    RESERVED("RESERVED"),
    ACTIVE("ACTIVE"),
    COMPLETED("COMPLETED"),
    TIMEDOUT("TIMEDOUT");

    public final String value;

    private PlayerSessionStatusEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum GameSessionStatusEnum {
    ACTIVE("ACTIVE"),
    ACTIVATING("ACTIVATING"),
    TERMINATED("TERMINATED"),
    TERMINATING("TERMINATING"),
    ERROR("ERROR");

    public final String value;

    private GameSessionStatusEnum(String value) {
        this.value = value;
    }
}

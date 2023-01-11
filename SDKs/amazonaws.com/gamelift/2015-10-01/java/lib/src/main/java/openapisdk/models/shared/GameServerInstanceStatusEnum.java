package openapisdk.models.shared;


public enum GameServerInstanceStatusEnum {
    ACTIVE("ACTIVE"),
    DRAINING("DRAINING"),
    SPOT_TERMINATING("SPOT_TERMINATING");

    public final String value;

    private GameServerInstanceStatusEnum(String value) {
        this.value = value;
    }
}

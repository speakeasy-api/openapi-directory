package openapisdk.models.shared;


public enum GameServerGroupDeleteOptionEnum {
    SAFE_DELETE("SAFE_DELETE"),
    FORCE_DELETE("FORCE_DELETE"),
    RETAIN("RETAIN");

    public final String value;

    private GameServerGroupDeleteOptionEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum CustomPluginStateEnum {
    CREATING("CREATING"),
    CREATE_FAILED("CREATE_FAILED"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    UPDATE_FAILED("UPDATE_FAILED"),
    DELETING("DELETING");

    public final String value;

    private CustomPluginStateEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum ResourceGroupStateEnum {
    CREATING("CREATING"),
    CREATE_COMPLETE("CREATE_COMPLETE"),
    CREATE_FAILED("CREATE_FAILED"),
    UPDATING("UPDATING"),
    UPDATE_COMPLETE("UPDATE_COMPLETE"),
    UPDATE_FAILED("UPDATE_FAILED");

    public final String value;

    private ResourceGroupStateEnum(String value) {
        this.value = value;
    }
}

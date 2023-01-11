package openapisdk.models.shared;


public enum ArchiveStateEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    CREATE_FAILED("CREATE_FAILED"),
    UPDATE_FAILED("UPDATE_FAILED");

    public final String value;

    private ArchiveStateEnum(String value) {
        this.value = value;
    }
}

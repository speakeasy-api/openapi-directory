package openapisdk.models.shared;


public enum ConnectionTypeEnum {
    JDBC("JDBC"),
    SFTP("SFTP"),
    MONGODB("MONGODB"),
    KAFKA("KAFKA"),
    NETWORK("NETWORK"),
    MARKETPLACE("MARKETPLACE"),
    CUSTOM("CUSTOM");

    public final String value;

    private ConnectionTypeEnum(String value) {
        this.value = value;
    }
}

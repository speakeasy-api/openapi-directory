package openapisdk.models.shared;


public enum SourceTypeEnum {
    DB_INSTANCE("db-instance"),
    DB_PARAMETER_GROUP("db-parameter-group"),
    DB_SECURITY_GROUP("db-security-group"),
    DB_SNAPSHOT("db-snapshot");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}

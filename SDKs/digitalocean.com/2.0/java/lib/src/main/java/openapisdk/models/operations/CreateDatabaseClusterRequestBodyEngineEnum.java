package openapisdk.models.operations;


public enum CreateDatabaseClusterRequestBodyEngineEnum {
    PG("pg"),
    MYSQL("mysql"),
    REDIS("redis"),
    MONGODB("mongodb");

    public final String value;

    private CreateDatabaseClusterRequestBodyEngineEnum(String value) {
        this.value = value;
    }
}

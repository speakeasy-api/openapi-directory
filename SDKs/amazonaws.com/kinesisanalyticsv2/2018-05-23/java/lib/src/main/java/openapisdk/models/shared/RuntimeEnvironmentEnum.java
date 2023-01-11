package openapisdk.models.shared;


public enum RuntimeEnvironmentEnum {
    SQL10("SQL-1_0"),
    FLINK16("FLINK-1_6"),
    FLINK18("FLINK-1_8"),
    FLINK111("FLINK-1_11"),
    ZEPPELIN_FLINK10("ZEPPELIN-FLINK-1_0");

    public final String value;

    private RuntimeEnvironmentEnum(String value) {
        this.value = value;
    }
}

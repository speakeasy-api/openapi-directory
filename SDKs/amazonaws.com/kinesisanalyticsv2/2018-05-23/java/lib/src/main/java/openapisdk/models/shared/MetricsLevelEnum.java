package openapisdk.models.shared;


public enum MetricsLevelEnum {
    APPLICATION("APPLICATION"),
    TASK("TASK"),
    OPERATOR("OPERATOR"),
    PARALLELISM("PARALLELISM");

    public final String value;

    private MetricsLevelEnum(String value) {
        this.value = value;
    }
}

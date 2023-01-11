package openapisdk.models.shared;


public enum UrlTypeEnum {
    FLINK_DASHBOARD_URL("FLINK_DASHBOARD_URL"),
    ZEPPELIN_UI_URL("ZEPPELIN_UI_URL");

    public final String value;

    private UrlTypeEnum(String value) {
        this.value = value;
    }
}

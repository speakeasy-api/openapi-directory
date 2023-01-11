package openapisdk.models.shared;


public enum LogDriverEnum {
    JSON_FILE("json-file"),
    SYSLOG("syslog"),
    JOURNALD("journald"),
    GELF("gelf"),
    FLUENTD("fluentd"),
    AWSLOGS("awslogs"),
    SPLUNK("splunk");

    public final String value;

    private LogDriverEnum(String value) {
        this.value = value;
    }
}

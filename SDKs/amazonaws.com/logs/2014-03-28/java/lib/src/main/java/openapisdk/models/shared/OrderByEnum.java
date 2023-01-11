package openapisdk.models.shared;


public enum OrderByEnum {
    LOG_STREAM_NAME("LogStreamName"),
    LAST_EVENT_TIME("LastEventTime");

    public final String value;

    private OrderByEnum(String value) {
        this.value = value;
    }
}

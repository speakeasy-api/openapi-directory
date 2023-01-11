package openapisdk.models.shared;


public enum TopicStatusEnum {
    REGISTERED("Registered"),
    TOPIC_NOT_FOUND("Topic not found"),
    FAILED("Failed"),
    DELETED("Deleted");

    public final String value;

    private TopicStatusEnum(String value) {
        this.value = value;
    }
}

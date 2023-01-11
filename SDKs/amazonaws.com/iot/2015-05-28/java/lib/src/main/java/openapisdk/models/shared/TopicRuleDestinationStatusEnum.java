package openapisdk.models.shared;


public enum TopicRuleDestinationStatusEnum {
    ENABLED("ENABLED"),
    IN_PROGRESS("IN_PROGRESS"),
    DISABLED("DISABLED"),
    ERROR("ERROR"),
    DELETING("DELETING");

    public final String value;

    private TopicRuleDestinationStatusEnum(String value) {
        this.value = value;
    }
}

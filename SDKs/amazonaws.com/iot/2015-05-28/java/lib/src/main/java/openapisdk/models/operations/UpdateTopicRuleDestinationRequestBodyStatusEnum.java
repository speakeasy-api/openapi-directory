package openapisdk.models.operations;


public enum UpdateTopicRuleDestinationRequestBodyStatusEnum {
    ENABLED("ENABLED"),
    IN_PROGRESS("IN_PROGRESS"),
    DISABLED("DISABLED"),
    ERROR("ERROR"),
    DELETING("DELETING");

    public final String value;

    private UpdateTopicRuleDestinationRequestBodyStatusEnum(String value) {
        this.value = value;
    }
}

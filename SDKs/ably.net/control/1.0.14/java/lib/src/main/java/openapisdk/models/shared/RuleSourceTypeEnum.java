package openapisdk.models.shared;


public enum RuleSourceTypeEnum {
    CHANNEL_MESSAGE("channel.message"),
    CHANNEL_PRESENCE("channel.presence"),
    CHANNEL_LIFECYCLE("channel.lifecycle"),
    CHANNEL_OCCUPANCY("channel.occupancy");

    public final String value;

    private RuleSourceTypeEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum ChannelStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING");

    public final String value;

    private ChannelStatusEnum(String value) {
        this.value = value;
    }
}

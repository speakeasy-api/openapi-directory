package openapisdk.models.shared;


public enum BotAliasStatusEnum {
    CREATING("Creating"),
    AVAILABLE("Available"),
    DELETING("Deleting"),
    FAILED("Failed");

    public final String value;

    private BotAliasStatusEnum(String value) {
        this.value = value;
    }
}

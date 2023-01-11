package openapisdk.models.shared;


public enum BotStatusEnum {
    CREATING("Creating"),
    AVAILABLE("Available"),
    INACTIVE("Inactive"),
    DELETING("Deleting"),
    FAILED("Failed"),
    VERSIONING("Versioning"),
    IMPORTING("Importing");

    public final String value;

    private BotStatusEnum(String value) {
        this.value = value;
    }
}

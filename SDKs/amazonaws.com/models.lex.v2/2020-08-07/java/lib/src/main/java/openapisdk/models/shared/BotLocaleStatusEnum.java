package openapisdk.models.shared;


public enum BotLocaleStatusEnum {
    CREATING("Creating"),
    BUILDING("Building"),
    BUILT("Built"),
    READY_EXPRESS_TESTING("ReadyExpressTesting"),
    FAILED("Failed"),
    DELETING("Deleting"),
    NOT_BUILT("NotBuilt"),
    IMPORTING("Importing");

    public final String value;

    private BotLocaleStatusEnum(String value) {
        this.value = value;
    }
}

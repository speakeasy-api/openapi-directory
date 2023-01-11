package openapisdk.models.shared;


public enum AllowedActionsEnum {
    ALL("all"),
    LOCAL_ONLY("local_only"),
    SELECTED("selected");

    public final String value;

    private AllowedActionsEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum FederationModeEnum {
    FEDERATED("FEDERATED"),
    LOCAL("LOCAL");

    public final String value;

    private FederationModeEnum(String value) {
        this.value = value;
    }
}

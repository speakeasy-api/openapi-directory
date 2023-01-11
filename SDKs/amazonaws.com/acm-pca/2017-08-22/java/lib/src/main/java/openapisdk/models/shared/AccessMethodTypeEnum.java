package openapisdk.models.shared;


public enum AccessMethodTypeEnum {
    CA_REPOSITORY("CA_REPOSITORY"),
    RESOURCE_PKI_MANIFEST("RESOURCE_PKI_MANIFEST"),
    RESOURCE_PKI_NOTIFY("RESOURCE_PKI_NOTIFY");

    public final String value;

    private AccessMethodTypeEnum(String value) {
        this.value = value;
    }
}

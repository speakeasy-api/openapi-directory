package openapisdk.models.shared;


public enum RegistryAliasStatusEnum {
    ACTIVE("ACTIVE"),
    PENDING("PENDING"),
    REJECTED("REJECTED");

    public final String value;

    private RegistryAliasStatusEnum(String value) {
        this.value = value;
    }
}

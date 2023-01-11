package openapisdk.models.shared;


public enum VaultTypeEnum {
    USER_CREATED("USER_CREATED"),
    PERSONAL("PERSONAL"),
    EVERYONE("EVERYONE"),
    TRANSFER("TRANSFER");

    public final String value;

    private VaultTypeEnum(String value) {
        this.value = value;
    }
}

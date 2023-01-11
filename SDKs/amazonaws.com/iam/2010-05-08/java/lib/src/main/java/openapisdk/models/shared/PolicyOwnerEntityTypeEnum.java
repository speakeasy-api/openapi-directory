package openapisdk.models.shared;


public enum PolicyOwnerEntityTypeEnum {
    USER("USER"),
    ROLE("ROLE"),
    GROUP("GROUP");

    public final String value;

    private PolicyOwnerEntityTypeEnum(String value) {
        this.value = value;
    }
}

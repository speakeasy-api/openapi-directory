package openapisdk.models.shared;


public enum AccessLevelFilterKeyEnum {
    ACCOUNT("Account"),
    ROLE("Role"),
    USER("User");

    public final String value;

    private AccessLevelFilterKeyEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum RoleTypeEnum {
    READ_ONLY("READ_ONLY"),
    DEVELOPER("DEVELOPER"),
    ADMIN("ADMIN");

    public final String value;

    private RoleTypeEnum(String value) {
        this.value = value;
    }
}

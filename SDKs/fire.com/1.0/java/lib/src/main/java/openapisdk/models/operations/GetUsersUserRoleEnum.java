package openapisdk.models.operations;


public enum GetUsersUserRoleEnum {
    ADMIN("ADMIN"),
    FULL_USER("FULL_USER"),
    READ_ONLY("READ_ONLY"),
    CARD_ONLY("CARD_ONLY");

    public final String value;

    private GetUsersUserRoleEnum(String value) {
        this.value = value;
    }
}

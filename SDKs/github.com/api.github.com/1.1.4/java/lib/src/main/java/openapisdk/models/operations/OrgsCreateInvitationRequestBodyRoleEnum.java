package openapisdk.models.operations;


public enum OrgsCreateInvitationRequestBodyRoleEnum {
    ADMIN("admin"),
    DIRECT_MEMBER("direct_member"),
    BILLING_MANAGER("billing_manager");

    public final String value;

    private OrgsCreateInvitationRequestBodyRoleEnum(String value) {
        this.value = value;
    }
}

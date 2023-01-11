package openapisdk.models.operations;


public enum ReposListForAuthenticatedUserTypeEnum {
    ALL("all"),
    OWNER("owner"),
    PUBLIC_("public"),
    PRIVATE_("private"),
    MEMBER("member");

    public final String value;

    private ReposListForAuthenticatedUserTypeEnum(String value) {
        this.value = value;
    }
}

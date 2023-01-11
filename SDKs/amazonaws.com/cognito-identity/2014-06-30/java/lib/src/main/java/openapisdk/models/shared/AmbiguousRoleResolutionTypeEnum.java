package openapisdk.models.shared;


public enum AmbiguousRoleResolutionTypeEnum {
    AUTHENTICATED_ROLE("AuthenticatedRole"),
    DENY("Deny");

    public final String value;

    private AmbiguousRoleResolutionTypeEnum(String value) {
        this.value = value;
    }
}

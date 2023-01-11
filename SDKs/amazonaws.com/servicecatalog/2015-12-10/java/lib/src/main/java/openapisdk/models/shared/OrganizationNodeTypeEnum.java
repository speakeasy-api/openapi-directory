package openapisdk.models.shared;


public enum OrganizationNodeTypeEnum {
    ORGANIZATION("ORGANIZATION"),
    ORGANIZATIONAL_UNIT("ORGANIZATIONAL_UNIT"),
    ACCOUNT("ACCOUNT");

    public final String value;

    private OrganizationNodeTypeEnum(String value) {
        this.value = value;
    }
}

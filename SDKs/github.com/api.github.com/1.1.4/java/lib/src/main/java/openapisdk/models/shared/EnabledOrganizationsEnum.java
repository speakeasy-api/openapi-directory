package openapisdk.models.shared;


public enum EnabledOrganizationsEnum {
    ALL("all"),
    NONE("none"),
    SELECTED("selected");

    public final String value;

    private EnabledOrganizationsEnum(String value) {
        this.value = value;
    }
}

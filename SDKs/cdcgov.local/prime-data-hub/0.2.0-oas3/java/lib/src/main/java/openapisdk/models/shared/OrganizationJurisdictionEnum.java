package openapisdk.models.shared;


public enum OrganizationJurisdictionEnum {
    NATIONAL("National"),
    STATE("State"),
    COUNTY("County");

    public final String value;

    private OrganizationJurisdictionEnum(String value) {
        this.value = value;
    }
}

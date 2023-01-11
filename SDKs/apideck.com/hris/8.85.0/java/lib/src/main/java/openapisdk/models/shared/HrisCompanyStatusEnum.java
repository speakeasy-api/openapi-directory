package openapisdk.models.shared;


public enum HrisCompanyStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    TRIAL("trial"),
    OTHER("other");

    public final String value;

    private HrisCompanyStatusEnum(String value) {
        this.value = value;
    }
}

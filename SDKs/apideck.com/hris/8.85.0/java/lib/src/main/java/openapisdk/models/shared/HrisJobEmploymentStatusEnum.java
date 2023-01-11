package openapisdk.models.shared;


public enum HrisJobEmploymentStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    TERMINATED("terminated"),
    OTHER("other");

    public final String value;

    private HrisJobEmploymentStatusEnum(String value) {
        this.value = value;
    }
}

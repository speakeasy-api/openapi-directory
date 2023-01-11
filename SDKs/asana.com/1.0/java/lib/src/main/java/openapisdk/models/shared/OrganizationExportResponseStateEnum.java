package openapisdk.models.shared;


public enum OrganizationExportResponseStateEnum {
    PENDING("pending"),
    STARTED("started"),
    FINISHED("finished"),
    ERROR("error");

    public final String value;

    private OrganizationExportResponseStateEnum(String value) {
        this.value = value;
    }
}

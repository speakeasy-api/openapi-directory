package openapisdk.models.operations;


public enum GetVersionLocationsFormatIncidentTypeEnum {
    CRASH("crash"),
    HAZARD("hazard"),
    THEFT("theft"),
    UNCONFIRMED("unconfirmed"),
    INFRASTRUCTURE_ISSUE("infrastructure_issue"),
    CHOP_SHOP("chop_shop");

    public final String value;

    private GetVersionLocationsFormatIncidentTypeEnum(String value) {
        this.value = value;
    }
}

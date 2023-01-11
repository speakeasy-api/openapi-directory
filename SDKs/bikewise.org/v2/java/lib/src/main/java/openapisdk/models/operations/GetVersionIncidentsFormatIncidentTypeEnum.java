package openapisdk.models.operations;


public enum GetVersionIncidentsFormatIncidentTypeEnum {
    CRASH("crash"),
    HAZARD("hazard"),
    THEFT("theft"),
    UNCONFIRMED("unconfirmed"),
    INFRASTRUCTURE_ISSUE("infrastructure_issue"),
    CHOP_SHOP("chop_shop");

    public final String value;

    private GetVersionIncidentsFormatIncidentTypeEnum(String value) {
        this.value = value;
    }
}

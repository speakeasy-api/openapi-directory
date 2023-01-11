package openapisdk.models.shared;


public enum PhysicalConnectorTypeEnum {
    RJ45("RJ45"),
    SFP_PLUS("SFP_PLUS"),
    QSFP("QSFP"),
    RJ452("RJ45_2"),
    WIFI("WIFI");

    public final String value;

    private PhysicalConnectorTypeEnum(String value) {
        this.value = value;
    }
}

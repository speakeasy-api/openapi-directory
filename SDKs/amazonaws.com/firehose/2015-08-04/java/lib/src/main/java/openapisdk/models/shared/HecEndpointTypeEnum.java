package openapisdk.models.shared;


public enum HecEndpointTypeEnum {
    RAW("Raw"),
    EVENT("Event");

    public final String value;

    private HecEndpointTypeEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum DestinationTypeEnum {
    IPV4("IPV4"),
    IPV6("IPV6"),
    PREFIX_LIST("PREFIX_LIST");

    public final String value;

    private DestinationTypeEnum(String value) {
        this.value = value;
    }
}

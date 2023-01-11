package openapisdk.models.shared;


public enum TrafficMirrorFilterRuleFieldEnum {
    DESTINATION_PORT_RANGE("destination-port-range"),
    SOURCE_PORT_RANGE("source-port-range"),
    PROTOCOL("protocol"),
    DESCRIPTION("description");

    public final String value;

    private TrafficMirrorFilterRuleFieldEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum TrafficMirrorSessionFieldEnum {
    PACKET_LENGTH("packet-length"),
    DESCRIPTION("description"),
    VIRTUAL_NETWORK_ID("virtual-network-id");

    public final String value;

    private TrafficMirrorSessionFieldEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum TcpFlagEnum {
    FIN("FIN"),
    SYN("SYN"),
    RST("RST"),
    PSH("PSH"),
    ACK("ACK"),
    URG("URG"),
    ECE("ECE"),
    CWR("CWR");

    public final String value;

    private TcpFlagEnum(String value) {
        this.value = value;
    }
}

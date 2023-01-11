package openapisdk.models.shared;


public enum TunnelTypeEnum {
    GTP_U("GTP-U"),
    GRE("GRE");

    public final String value;

    private TunnelTypeEnum(String value) {
        this.value = value;
    }
}

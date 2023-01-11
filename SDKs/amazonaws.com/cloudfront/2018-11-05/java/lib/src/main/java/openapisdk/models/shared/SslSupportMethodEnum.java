package openapisdk.models.shared;


public enum SslSupportMethodEnum {
    SNI_ONLY("sni-only"),
    VIP("vip");

    public final String value;

    private SslSupportMethodEnum(String value) {
        this.value = value;
    }
}

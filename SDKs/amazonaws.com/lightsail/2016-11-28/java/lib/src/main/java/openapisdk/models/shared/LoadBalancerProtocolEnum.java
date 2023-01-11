package openapisdk.models.shared;


public enum LoadBalancerProtocolEnum {
    HTTP_HTTPS("HTTP_HTTPS"),
    HTTP("HTTP");

    public final String value;

    private LoadBalancerProtocolEnum(String value) {
        this.value = value;
    }
}

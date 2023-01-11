package openapisdk.models.shared;


public enum LoadBalancerTypeEnumEnum {
    APPLICATION("application"),
    NETWORK("network"),
    GATEWAY("gateway");

    public final String value;

    private LoadBalancerTypeEnumEnum(String value) {
        this.value = value;
    }
}

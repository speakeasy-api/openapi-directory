package openapisdk.models.shared;


public enum RouteStatusCodeEnum {
    ACTIVE("ACTIVE"),
    DELETED("DELETED"),
    INACTIVE("INACTIVE");

    public final String value;

    private RouteStatusCodeEnum(String value) {
        this.value = value;
    }
}

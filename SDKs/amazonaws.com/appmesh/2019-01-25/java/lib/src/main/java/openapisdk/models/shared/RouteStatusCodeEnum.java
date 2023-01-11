package openapisdk.models.shared;


public enum RouteStatusCodeEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETED("DELETED");

    public final String value;

    private RouteStatusCodeEnum(String value) {
        this.value = value;
    }
}

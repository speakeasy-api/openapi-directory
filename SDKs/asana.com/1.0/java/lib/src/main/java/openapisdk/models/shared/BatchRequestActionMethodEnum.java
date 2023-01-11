package openapisdk.models.shared;


public enum BatchRequestActionMethodEnum {
    GET("get"),
    POST("post"),
    PUT("put"),
    DELETE("delete"),
    PATCH("patch"),
    HEAD("head");

    public final String value;

    private BatchRequestActionMethodEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.shared;


public enum HttpMethodEnum {
    GET("GET"),
    HEAD("HEAD"),
    POST("POST"),
    PUT("PUT"),
    DELETE("DELETE"),
    CONNECT("CONNECT"),
    OPTIONS("OPTIONS"),
    TRACE("TRACE"),
    PATCH("PATCH");

    public final String value;

    private HttpMethodEnum(String value) {
        this.value = value;
    }
}

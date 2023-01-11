package openapisdk.models.shared;


public enum HttpMethodEnum {
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    DELETE("DELETE"),
    PUT("PUT"),
    HEAD("HEAD");

    public final String value;

    private HttpMethodEnum(String value) {
        this.value = value;
    }
}

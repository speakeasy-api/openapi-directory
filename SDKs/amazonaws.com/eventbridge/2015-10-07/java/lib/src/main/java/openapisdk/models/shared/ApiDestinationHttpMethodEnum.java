package openapisdk.models.shared;


public enum ApiDestinationHttpMethodEnum {
    POST("POST"),
    GET("GET"),
    HEAD("HEAD"),
    OPTIONS("OPTIONS"),
    PUT("PUT"),
    PATCH("PATCH"),
    DELETE("DELETE");

    public final String value;

    private ApiDestinationHttpMethodEnum(String value) {
        this.value = value;
    }
}

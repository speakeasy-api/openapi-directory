package openapisdk.models.shared;


public enum ConnectionOAuthHttpMethodEnum {
    GET("GET"),
    POST("POST"),
    PUT("PUT");

    public final String value;

    private ConnectionOAuthHttpMethodEnum(String value) {
        this.value = value;
    }
}

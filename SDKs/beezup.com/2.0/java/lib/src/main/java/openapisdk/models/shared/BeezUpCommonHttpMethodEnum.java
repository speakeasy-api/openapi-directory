package openapisdk.models.shared;


public enum BeezUpCommonHttpMethodEnum {
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    DELETE("DELETE"),
    PUT("PUT"),
    HEAD("HEAD");

    public final String value;

    private BeezUpCommonHttpMethodEnum(String value) {
        this.value = value;
    }
}

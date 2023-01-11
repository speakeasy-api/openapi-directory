package openapisdk.models.shared;


public enum MethodNameEnum {
    PUT("PUT"),
    GET("GET"),
    DELETE("DELETE"),
    HEAD("HEAD");

    public final String value;

    private MethodNameEnum(String value) {
        this.value = value;
    }
}

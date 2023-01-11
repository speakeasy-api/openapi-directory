package openapisdk.models.shared;


public enum HttpSchemeEnum {
    HTTP("http"),
    HTTPS("https");

    public final String value;

    private HttpSchemeEnum(String value) {
        this.value = value;
    }
}

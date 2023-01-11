package openapisdk.models.shared;


public enum HttpVersionEnum {
    HTTP11("http1.1"),
    HTTP2("http2");

    public final String value;

    private HttpVersionEnum(String value) {
        this.value = value;
    }
}

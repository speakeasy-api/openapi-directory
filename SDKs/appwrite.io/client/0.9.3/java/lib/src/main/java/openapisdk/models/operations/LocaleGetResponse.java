package openapisdk.models.operations;



public class LocaleGetResponse {
    public String contentType;
    public LocaleGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocaleGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Locale locale;
    public LocaleGetResponse withLocale(openapisdk.models.shared.Locale locale) {
        this.locale = locale;
        return this;
    }
}
package openapisdk.models.operations;



public class LocaleGetLanguagesResponse {
    public String contentType;
    public LocaleGetLanguagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocaleGetLanguagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LanguageList languageList;
    public LocaleGetLanguagesResponse withLanguageList(openapisdk.models.shared.LanguageList languageList) {
        this.languageList = languageList;
        return this;
    }
}
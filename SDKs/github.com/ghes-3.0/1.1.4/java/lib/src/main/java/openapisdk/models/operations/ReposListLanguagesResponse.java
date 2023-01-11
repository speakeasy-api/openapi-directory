package openapisdk.models.operations;



public class ReposListLanguagesResponse {
    public String contentType;
    public ReposListLanguagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposListLanguagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Long> language;
    public ReposListLanguagesResponse withLanguage(java.util.Map<String, Long> language) {
        this.language = language;
        return this;
    }
}
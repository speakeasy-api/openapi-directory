package openapisdk.models.operations;



public class MarkdownRenderRawResponse {
    public String contentType;
    public MarkdownRenderRawResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public MarkdownRenderRawResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public MarkdownRenderRawResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String markdownRenderRaw200TextHTMLString;
    public MarkdownRenderRawResponse withMarkdownRenderRaw200TextHtmlString(String markdownRenderRaw200TextHTMLString) {
        this.markdownRenderRaw200TextHTMLString = markdownRenderRaw200TextHTMLString;
        return this;
    }
}
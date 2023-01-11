package openapisdk.models.operations;



public class MarkdownRenderResponse {
    public String contentType;
    public MarkdownRenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public MarkdownRenderResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public MarkdownRenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String markdownRender200TextHTMLString;
    public MarkdownRenderResponse withMarkdownRender200TextHtmlString(String markdownRender200TextHTMLString) {
        this.markdownRender200TextHTMLString = markdownRender200TextHTMLString;
        return this;
    }
}
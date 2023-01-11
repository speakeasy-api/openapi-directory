package openapisdk.models.operations;



public class DownloadLabelFileResponse {
    public byte[] body;
    public DownloadLabelFileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DownloadLabelFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DownloadLabelFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
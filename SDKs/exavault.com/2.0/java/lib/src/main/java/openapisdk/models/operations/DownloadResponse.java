package openapisdk.models.operations;



public class DownloadResponse {
    public String contentType;
    public DownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] download200ApplicationOctetStreamBinaryString;
    public DownloadResponse withDownload200ApplicationOctetStreamBinaryString(byte[] download200ApplicationOctetStreamBinaryString) {
        this.download200ApplicationOctetStreamBinaryString = download200ApplicationOctetStreamBinaryString;
        return this;
    }
    public byte[] download200ApplicationZipBinaryString;
    public DownloadResponse withDownload200ApplicationZipBinaryString(byte[] download200ApplicationZipBinaryString) {
        this.download200ApplicationZipBinaryString = download200ApplicationZipBinaryString;
        return this;
    }
}
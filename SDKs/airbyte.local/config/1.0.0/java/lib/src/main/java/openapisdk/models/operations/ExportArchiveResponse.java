package openapisdk.models.operations;



public class ExportArchiveResponse {
    public byte[] airbyteArchive;
    public ExportArchiveResponse withAirbyteArchive(byte[] airbyteArchive) {
        this.airbyteArchive = airbyteArchive;
        return this;
    }
    public String contentType;
    public ExportArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
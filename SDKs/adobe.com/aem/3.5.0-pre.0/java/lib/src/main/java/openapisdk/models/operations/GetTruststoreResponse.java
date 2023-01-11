package openapisdk.models.operations;



public class GetTruststoreResponse {
    public String contentType;
    public GetTruststoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTruststoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getTruststoreDefaultApplicationOctetStreamBinaryString;
    public GetTruststoreResponse withGetTruststoreDefaultApplicationOctetStreamBinaryString(byte[] getTruststoreDefaultApplicationOctetStreamBinaryString) {
        this.getTruststoreDefaultApplicationOctetStreamBinaryString = getTruststoreDefaultApplicationOctetStreamBinaryString;
        return this;
    }
}
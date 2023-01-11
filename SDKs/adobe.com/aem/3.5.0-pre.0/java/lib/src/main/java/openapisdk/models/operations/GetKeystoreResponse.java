package openapisdk.models.operations;



public class GetKeystoreResponse {
    public String contentType;
    public GetKeystoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetKeystoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getKeystoreDefaultApplicationOctetStreamBinaryString;
    public GetKeystoreResponse withGetKeystoreDefaultApplicationOctetStreamBinaryString(byte[] getKeystoreDefaultApplicationOctetStreamBinaryString) {
        this.getKeystoreDefaultApplicationOctetStreamBinaryString = getKeystoreDefaultApplicationOctetStreamBinaryString;
        return this;
    }
}
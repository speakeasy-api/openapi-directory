package openapisdk.models.operations;



public class GetPackageResponse {
    public String contentType;
    public GetPackageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPackageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getPackageDefaultApplicationOctetStreamBinaryString;
    public GetPackageResponse withGetPackageDefaultApplicationOctetStreamBinaryString(byte[] getPackageDefaultApplicationOctetStreamBinaryString) {
        this.getPackageDefaultApplicationOctetStreamBinaryString = getPackageDefaultApplicationOctetStreamBinaryString;
        return this;
    }
}
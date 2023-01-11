package openapisdk.models.operations;



public class ZebraGetResponse {
    public String contentType;
    public ZebraGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ZebraGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] zebraGET200ImagePngBinaryString;
    public ZebraGetResponse withZebraGet200ImagePngBinaryString(byte[] zebraGET200ImagePngBinaryString) {
        this.zebraGET200ImagePngBinaryString = zebraGET200ImagePngBinaryString;
        return this;
    }
}
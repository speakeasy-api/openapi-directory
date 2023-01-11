package openapisdk.models.operations;



public class PatientsQrda1Response {
    public byte[] body;
    public PatientsQrda1Response withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatientsQrda1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientsQrda1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
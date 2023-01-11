package openapisdk.models.operations;



public class PatientsCcdaResponse {
    public byte[] body;
    public PatientsCcdaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatientsCcdaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientsCcdaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
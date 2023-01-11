package openapisdk.models.operations;



public class DoctorsReadResponse {
    public String contentType;
    public DoctorsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Doctor doctor;
    public DoctorsReadResponse withDoctor(openapisdk.models.shared.Doctor doctor) {
        this.doctor = doctor;
        return this;
    }
    public Long statusCode;
    public DoctorsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
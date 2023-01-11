package openapisdk.models.operations;



public class MessagesCreateResponse {
    public String contentType;
    public MessagesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DoctorMessage doctorMessage;
    public MessagesCreateResponse withDoctorMessage(openapisdk.models.shared.DoctorMessage doctorMessage) {
        this.doctorMessage = doctorMessage;
        return this;
    }
    public Long statusCode;
    public MessagesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
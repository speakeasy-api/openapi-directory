package openapisdk.models.operations;



public class MessagesReadResponse {
    public String contentType;
    public MessagesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DoctorMessage doctorMessage;
    public MessagesReadResponse withDoctorMessage(openapisdk.models.shared.DoctorMessage doctorMessage) {
        this.doctorMessage = doctorMessage;
        return this;
    }
    public Long statusCode;
    public MessagesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
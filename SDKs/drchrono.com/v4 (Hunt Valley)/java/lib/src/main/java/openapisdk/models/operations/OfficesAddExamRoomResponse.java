package openapisdk.models.operations;



public class OfficesAddExamRoomResponse {
    public String contentType;
    public OfficesAddExamRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Office office;
    public OfficesAddExamRoomResponse withOffice(openapisdk.models.shared.Office office) {
        this.office = office;
        return this;
    }
    public Long statusCode;
    public OfficesAddExamRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
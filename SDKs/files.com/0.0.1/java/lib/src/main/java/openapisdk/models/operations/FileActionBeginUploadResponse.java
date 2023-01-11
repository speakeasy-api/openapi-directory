package openapisdk.models.operations;



public class FileActionBeginUploadResponse {
    public String contentType;
    public FileActionBeginUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileUploadPartEntity[] fileUploadPartEntities;
    public FileActionBeginUploadResponse withFileUploadPartEntities(openapisdk.models.shared.FileUploadPartEntity[] fileUploadPartEntities) {
        this.fileUploadPartEntities = fileUploadPartEntities;
        return this;
    }
    public Long statusCode;
    public FileActionBeginUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
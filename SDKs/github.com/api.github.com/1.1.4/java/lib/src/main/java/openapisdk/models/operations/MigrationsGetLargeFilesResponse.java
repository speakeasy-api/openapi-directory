package openapisdk.models.operations;



public class MigrationsGetLargeFilesResponse {
    public String contentType;
    public MigrationsGetLargeFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsGetLargeFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PorterLargeFile[] porterLargeFiles;
    public MigrationsGetLargeFilesResponse withPorterLargeFiles(openapisdk.models.shared.PorterLargeFile[] porterLargeFiles) {
        this.porterLargeFiles = porterLargeFiles;
        return this;
    }
}
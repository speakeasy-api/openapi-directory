package openapisdk.models.operations;



public class GetFileMigrationsIdResponse {
    public String contentType;
    public GetFileMigrationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileMigrationEntity fileMigrationEntity;
    public GetFileMigrationsIdResponse withFileMigrationEntity(openapisdk.models.shared.FileMigrationEntity fileMigrationEntity) {
        this.fileMigrationEntity = fileMigrationEntity;
        return this;
    }
    public Long statusCode;
    public GetFileMigrationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
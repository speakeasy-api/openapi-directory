package openapisdk.models.operations;



public class ProtocolTftpGetConfigResponse {
    public openapisdk.models.shared.ConfigTftp configTFTP;
    public ProtocolTftpGetConfigResponse withConfigTftp(openapisdk.models.shared.ConfigTftp configTFTP) {
        this.configTFTP = configTFTP;
        return this;
    }
    public String contentType;
    public ProtocolTftpGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTftpGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
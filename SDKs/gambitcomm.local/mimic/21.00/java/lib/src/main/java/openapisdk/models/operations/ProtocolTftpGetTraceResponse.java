package openapisdk.models.operations;



public class ProtocolTftpGetTraceResponse {
    public openapisdk.models.shared.ConfigTftp configTFTP;
    public ProtocolTftpGetTraceResponse withConfigTftp(openapisdk.models.shared.ConfigTftp configTFTP) {
        this.configTFTP = configTFTP;
        return this;
    }
    public String contentType;
    public ProtocolTftpGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTftpGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
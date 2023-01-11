package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ServerCertificateMetadata
 * <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p>
**/
public class ServerCertificateMetadata {
    public String arn;
    public ServerCertificateMetadata withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public OffsetDateTime expiration;
    public ServerCertificateMetadata withExpiration(OffsetDateTime expiration) {
        this.expiration = expiration;
        return this;
    }
    public String path;
    public ServerCertificateMetadata withPath(String path) {
        this.path = path;
        return this;
    }
    public String serverCertificateId;
    public ServerCertificateMetadata withServerCertificateId(String serverCertificateId) {
        this.serverCertificateId = serverCertificateId;
        return this;
    }
    public String serverCertificateName;
    public ServerCertificateMetadata withServerCertificateName(String serverCertificateName) {
        this.serverCertificateName = serverCertificateName;
        return this;
    }
    public OffsetDateTime uploadDate;
    public ServerCertificateMetadata withUploadDate(OffsetDateTime uploadDate) {
        this.uploadDate = uploadDate;
        return this;
    }
}
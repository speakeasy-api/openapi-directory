package openapisdk.models.shared;



/**
 * ServerCertificate
 * <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
**/
public class ServerCertificate {
    public String certificateBody;
    public ServerCertificate withCertificateBody(String certificateBody) {
        this.certificateBody = certificateBody;
        return this;
    }
    public String certificateChain;
    public ServerCertificate withCertificateChain(String certificateChain) {
        this.certificateChain = certificateChain;
        return this;
    }
    public ServerCertificateMetadata serverCertificateMetadata;
    public ServerCertificate withServerCertificateMetadata(ServerCertificateMetadata serverCertificateMetadata) {
        this.serverCertificateMetadata = serverCertificateMetadata;
        return this;
    }
    public Tag[] tags;
    public ServerCertificate withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}
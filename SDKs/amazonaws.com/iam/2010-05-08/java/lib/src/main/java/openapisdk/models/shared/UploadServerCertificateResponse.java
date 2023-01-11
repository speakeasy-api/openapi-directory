package openapisdk.models.shared;



/**
 * UploadServerCertificateResponse
 * Contains the response to a successful <a>UploadServerCertificate</a> request. 
**/
public class UploadServerCertificateResponse {
    public ServerCertificateMetadata serverCertificateMetadata;
    public UploadServerCertificateResponse withServerCertificateMetadata(ServerCertificateMetadata serverCertificateMetadata) {
        this.serverCertificateMetadata = serverCertificateMetadata;
        return this;
    }
    public Tag[] tags;
    public UploadServerCertificateResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}
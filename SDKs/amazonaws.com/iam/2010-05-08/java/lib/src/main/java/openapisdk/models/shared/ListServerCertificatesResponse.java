package openapisdk.models.shared;



/**
 * ListServerCertificatesResponse
 * Contains the response to a successful <a>ListServerCertificates</a> request. 
**/
public class ListServerCertificatesResponse {
    public Boolean isTruncated;
    public ListServerCertificatesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListServerCertificatesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ServerCertificateMetadata[] serverCertificateMetadataList;
    public ListServerCertificatesResponse withServerCertificateMetadataList(ServerCertificateMetadata[] serverCertificateMetadataList) {
        this.serverCertificateMetadataList = serverCertificateMetadataList;
        return this;
    }
}
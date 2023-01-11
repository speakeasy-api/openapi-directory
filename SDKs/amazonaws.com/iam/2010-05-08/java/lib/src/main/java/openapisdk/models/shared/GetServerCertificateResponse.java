package openapisdk.models.shared;



/**
 * GetServerCertificateResponse
 * Contains the response to a successful <a>GetServerCertificate</a> request. 
**/
public class GetServerCertificateResponse {
    public ServerCertificate serverCertificate;
    public GetServerCertificateResponse withServerCertificate(ServerCertificate serverCertificate) {
        this.serverCertificate = serverCertificate;
        return this;
    }
}
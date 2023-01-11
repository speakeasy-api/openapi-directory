package openapisdk.models.shared;



/**
 * GetFederationTokenResponse
 * Contains the response to a successful <a>GetFederationToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
public class GetFederationTokenResponse {
    public Credentials credentials;
    public GetFederationTokenResponse withCredentials(Credentials credentials) {
        this.credentials = credentials;
        return this;
    }
    public FederatedUser federatedUser;
    public GetFederationTokenResponse withFederatedUser(FederatedUser federatedUser) {
        this.federatedUser = federatedUser;
        return this;
    }
    public Long packedPolicySize;
    public GetFederationTokenResponse withPackedPolicySize(Long packedPolicySize) {
        this.packedPolicySize = packedPolicySize;
        return this;
    }
}
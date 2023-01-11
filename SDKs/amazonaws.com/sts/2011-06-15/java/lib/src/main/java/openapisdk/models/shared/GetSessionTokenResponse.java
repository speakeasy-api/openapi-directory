package openapisdk.models.shared;



/**
 * GetSessionTokenResponse
 * Contains the response to a successful <a>GetSessionToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
public class GetSessionTokenResponse {
    public Credentials credentials;
    public GetSessionTokenResponse withCredentials(Credentials credentials) {
        this.credentials = credentials;
        return this;
    }
}
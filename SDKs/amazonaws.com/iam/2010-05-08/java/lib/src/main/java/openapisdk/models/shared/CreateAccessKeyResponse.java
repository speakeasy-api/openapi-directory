package openapisdk.models.shared;



/**
 * CreateAccessKeyResponse
 * Contains the response to a successful <a>CreateAccessKey</a> request. 
**/
public class CreateAccessKeyResponse {
    public AccessKey accessKey;
    public CreateAccessKeyResponse withAccessKey(AccessKey accessKey) {
        this.accessKey = accessKey;
        return this;
    }
}
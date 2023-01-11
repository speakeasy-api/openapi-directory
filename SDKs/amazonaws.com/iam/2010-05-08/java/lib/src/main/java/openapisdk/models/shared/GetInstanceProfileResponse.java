package openapisdk.models.shared;



/**
 * GetInstanceProfileResponse
 * Contains the response to a successful <a>GetInstanceProfile</a> request. 
**/
public class GetInstanceProfileResponse {
    public InstanceProfile instanceProfile;
    public GetInstanceProfileResponse withInstanceProfile(InstanceProfile instanceProfile) {
        this.instanceProfile = instanceProfile;
        return this;
    }
}
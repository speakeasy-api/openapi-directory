package openapisdk.models.shared;



/**
 * CreateInstanceProfileResponse
 * Contains the response to a successful <a>CreateInstanceProfile</a> request. 
**/
public class CreateInstanceProfileResponse {
    public InstanceProfile instanceProfile;
    public CreateInstanceProfileResponse withInstanceProfile(InstanceProfile instanceProfile) {
        this.instanceProfile = instanceProfile;
        return this;
    }
}
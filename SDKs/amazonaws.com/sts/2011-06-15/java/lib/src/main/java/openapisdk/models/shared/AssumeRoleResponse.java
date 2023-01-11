package openapisdk.models.shared;



/**
 * AssumeRoleResponse
 * Contains the response to a successful <a>AssumeRole</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
public class AssumeRoleResponse {
    public AssumedRoleUser assumedRoleUser;
    public AssumeRoleResponse withAssumedRoleUser(AssumedRoleUser assumedRoleUser) {
        this.assumedRoleUser = assumedRoleUser;
        return this;
    }
    public Credentials credentials;
    public AssumeRoleResponse withCredentials(Credentials credentials) {
        this.credentials = credentials;
        return this;
    }
    public Long packedPolicySize;
    public AssumeRoleResponse withPackedPolicySize(Long packedPolicySize) {
        this.packedPolicySize = packedPolicySize;
        return this;
    }
    public String sourceIdentity;
    public AssumeRoleResponse withSourceIdentity(String sourceIdentity) {
        this.sourceIdentity = sourceIdentity;
        return this;
    }
}
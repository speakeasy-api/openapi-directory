package openapisdk.models.shared;



/**
 * ListInstanceProfilesForRoleResponse
 * Contains the response to a successful <a>ListInstanceProfilesForRole</a> request. 
**/
public class ListInstanceProfilesForRoleResponse {
    public InstanceProfile[] instanceProfiles;
    public ListInstanceProfilesForRoleResponse withInstanceProfiles(InstanceProfile[] instanceProfiles) {
        this.instanceProfiles = instanceProfiles;
        return this;
    }
    public Boolean isTruncated;
    public ListInstanceProfilesForRoleResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListInstanceProfilesForRoleResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}
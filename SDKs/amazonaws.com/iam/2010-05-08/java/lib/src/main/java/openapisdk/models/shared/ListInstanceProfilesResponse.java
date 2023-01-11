package openapisdk.models.shared;



/**
 * ListInstanceProfilesResponse
 * Contains the response to a successful <a>ListInstanceProfiles</a> request. 
**/
public class ListInstanceProfilesResponse {
    public InstanceProfile[] instanceProfiles;
    public ListInstanceProfilesResponse withInstanceProfiles(InstanceProfile[] instanceProfiles) {
        this.instanceProfiles = instanceProfiles;
        return this;
    }
    public Boolean isTruncated;
    public ListInstanceProfilesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListInstanceProfilesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}
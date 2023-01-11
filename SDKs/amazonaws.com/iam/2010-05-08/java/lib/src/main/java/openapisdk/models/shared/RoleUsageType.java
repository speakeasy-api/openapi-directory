package openapisdk.models.shared;



/**
 * RoleUsageType
 * <p>An object that contains details about how a service-linked role is used, if that information is returned by the service.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
**/
public class RoleUsageType {
    public String region;
    public RoleUsageType withRegion(String region) {
        this.region = region;
        return this;
    }
    public String[] resources;
    public RoleUsageType withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddIpRoutesRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public AddIpRoutesRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("IpRoutes")
    public IpRoute[] ipRoutes;
    public AddIpRoutesRequest withIpRoutes(IpRoute[] ipRoutes) {
        this.ipRoutes = ipRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateSecurityGroupForDirectoryControllers")
    public Boolean updateSecurityGroupForDirectoryControllers;
    public AddIpRoutesRequest withUpdateSecurityGroupForDirectoryControllers(Boolean updateSecurityGroupForDirectoryControllers) {
        this.updateSecurityGroupForDirectoryControllers = updateSecurityGroupForDirectoryControllers;
        return this;
    }
}
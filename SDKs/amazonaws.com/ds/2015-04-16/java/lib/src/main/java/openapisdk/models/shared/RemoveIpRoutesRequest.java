package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveIpRoutesRequest {
    @JsonProperty("CidrIps")
    public String[] cidrIps;
    public RemoveIpRoutesRequest withCidrIps(String[] cidrIps) {
        this.cidrIps = cidrIps;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public RemoveIpRoutesRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}
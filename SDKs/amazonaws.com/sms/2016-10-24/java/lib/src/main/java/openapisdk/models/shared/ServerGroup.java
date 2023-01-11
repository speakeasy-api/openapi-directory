package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerGroup
 * Logical grouping of servers.
**/
public class ServerGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServerGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroupId")
    public String serverGroupId;
    public ServerGroup withServerGroupId(String serverGroupId) {
        this.serverGroupId = serverGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverList")
    public Server[] serverList;
    public ServerGroup withServerList(Server[] serverList) {
        this.serverList = serverList;
        return this;
    }
}
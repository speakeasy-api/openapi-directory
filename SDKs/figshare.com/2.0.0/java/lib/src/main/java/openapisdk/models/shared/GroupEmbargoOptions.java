package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupEmbargoOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GroupEmbargoOptions withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_name")
    public String ipName;
    public GroupEmbargoOptions withIpName(String ipName) {
        this.ipName = ipName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GroupEmbargoOptionsTypeEnum type;
    public GroupEmbargoOptions withType(GroupEmbargoOptionsTypeEnum type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVpcMembers200ApplicationJsonMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public ListVpcMembers200ApplicationJsonMembers withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListVpcMembers200ApplicationJsonMembers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urn")
    public String urn;
    public ListVpcMembers200ApplicationJsonMembers withUrn(String urn) {
        this.urn = urn;
        return this;
    }
}
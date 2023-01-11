package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVpcMembers200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListVpcMembers200ApplicationJsonLinks links;
    public ListVpcMembers200ApplicationJson withLinks(ListVpcMembers200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public ListVpcMembers200ApplicationJsonMembers[] members;
    public ListVpcMembers200ApplicationJson withMembers(ListVpcMembers200ApplicationJsonMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonProperty("meta")
    public ListVpcMembers200ApplicationJsonMeta meta;
    public ListVpcMembers200ApplicationJson withMeta(ListVpcMembers200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}
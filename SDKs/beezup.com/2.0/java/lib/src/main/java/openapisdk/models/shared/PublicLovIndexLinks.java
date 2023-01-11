package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublicLovIndexLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lists")
    public java.util.Map<String, LinksGetPublicListOfValuesLink> lists;
    public PublicLovIndexLinks withLists(java.util.Map<String, LinksGetPublicListOfValuesLink> lists) {
        this.lists = lists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetPublicLovIndexLink self;
    public PublicLovIndexLinks withSelf(LinksGetPublicLovIndexLink self) {
        this.self = self;
        return this;
    }
}
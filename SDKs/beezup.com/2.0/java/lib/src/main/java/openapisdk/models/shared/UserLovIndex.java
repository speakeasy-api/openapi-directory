package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserLovIndex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public UserLovIndexLinks links;
    public UserLovIndex withLinks(UserLovIndexLinks links) {
        this.links = links;
        return this;
    }
}
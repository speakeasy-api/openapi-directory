package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainRequest {
    @JsonProperty("domainName")
    public String domainName;
    public CreateDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateDomainRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}
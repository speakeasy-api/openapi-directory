package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateTagsForDomainRequest
 * The UpdateTagsForDomainRequest includes the following elements.
**/
public class UpdateTagsForDomainRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public UpdateTagsForDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagsToUpdate")
    public Tag[] tagsToUpdate;
    public UpdateTagsForDomainRequest withTagsToUpdate(Tag[] tagsToUpdate) {
        this.tagsToUpdate = tagsToUpdate;
        return this;
    }
}
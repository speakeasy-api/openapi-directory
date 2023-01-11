package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteTagsForDomainRequest
 * The DeleteTagsForDomainRequest includes the following elements.
**/
public class DeleteTagsForDomainRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public DeleteTagsForDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("TagsToDelete")
    public String[] tagsToDelete;
    public DeleteTagsForDomainRequest withTagsToDelete(String[] tagsToDelete) {
        this.tagsToDelete = tagsToDelete;
        return this;
    }
}
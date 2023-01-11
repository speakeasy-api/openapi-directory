package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateRepositoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepositoryAssociation")
    public RepositoryAssociation repositoryAssociation;
    public DisassociateRepositoryResponse withRepositoryAssociation(RepositoryAssociation repositoryAssociation) {
        this.repositoryAssociation = repositoryAssociation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public DisassociateRepositoryResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}
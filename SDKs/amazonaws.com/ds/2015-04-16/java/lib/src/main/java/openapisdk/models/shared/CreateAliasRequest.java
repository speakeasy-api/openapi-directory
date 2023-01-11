package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateAliasRequest
 * Contains the inputs for the <a>CreateAlias</a> operation.
**/
public class CreateAliasRequest {
    @JsonProperty("Alias")
    public String alias;
    public CreateAliasRequest withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public CreateAliasRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}
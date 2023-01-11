package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAliasResult
 * Contains the results of the <a>CreateAlias</a> operation.
**/
public class CreateAliasResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Alias")
    public String alias;
    public CreateAliasResult withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public CreateAliasResult withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}
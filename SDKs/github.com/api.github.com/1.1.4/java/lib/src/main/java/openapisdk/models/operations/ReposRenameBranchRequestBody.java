package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRenameBranchRequestBody {
    @JsonProperty("new_name")
    public String newName;
    public ReposRenameBranchRequestBody withNewName(String newName) {
        this.newName = newName;
        return this;
    }
}
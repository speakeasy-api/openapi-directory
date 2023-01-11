package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposTransferRequestBody {
    @JsonProperty("new_owner")
    public String newOwner;
    public ReposTransferRequestBody withNewOwner(String newOwner) {
        this.newOwner = newOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_ids")
    public Long[] teamIds;
    public ReposTransferRequestBody withTeamIds(Long[] teamIds) {
        this.teamIds = teamIds;
        return this;
    }
}
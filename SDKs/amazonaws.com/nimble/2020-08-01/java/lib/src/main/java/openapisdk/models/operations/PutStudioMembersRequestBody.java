package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutStudioMembersRequestBody {
    @JsonProperty("identityStoreId")
    public String identityStoreId;
    public PutStudioMembersRequestBody withIdentityStoreId(String identityStoreId) {
        this.identityStoreId = identityStoreId;
        return this;
    }
    @JsonProperty("members")
    public openapisdk.models.shared.NewStudioMember[] members;
    public PutStudioMembersRequestBody withMembers(openapisdk.models.shared.NewStudioMember[] members) {
        this.members = members;
        return this;
    }
}
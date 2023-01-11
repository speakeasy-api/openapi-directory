package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLaunchProfileMembersRequestBody {
    @JsonProperty("identityStoreId")
    public String identityStoreId;
    public PutLaunchProfileMembersRequestBody withIdentityStoreId(String identityStoreId) {
        this.identityStoreId = identityStoreId;
        return this;
    }
    @JsonProperty("members")
    public openapisdk.models.shared.NewLaunchProfileMember[] members;
    public PutLaunchProfileMembersRequestBody withMembers(openapisdk.models.shared.NewLaunchProfileMember[] members) {
        this.members = members;
        return this;
    }
}
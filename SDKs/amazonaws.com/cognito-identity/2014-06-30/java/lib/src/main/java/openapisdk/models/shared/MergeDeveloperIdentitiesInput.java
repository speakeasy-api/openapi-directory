package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MergeDeveloperIdentitiesInput
 * Input to the <code>MergeDeveloperIdentities</code> action.
**/
public class MergeDeveloperIdentitiesInput {
    @JsonProperty("DestinationUserIdentifier")
    public String destinationUserIdentifier;
    public MergeDeveloperIdentitiesInput withDestinationUserIdentifier(String destinationUserIdentifier) {
        this.destinationUserIdentifier = destinationUserIdentifier;
        return this;
    }
    @JsonProperty("DeveloperProviderName")
    public String developerProviderName;
    public MergeDeveloperIdentitiesInput withDeveloperProviderName(String developerProviderName) {
        this.developerProviderName = developerProviderName;
        return this;
    }
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public MergeDeveloperIdentitiesInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonProperty("SourceUserIdentifier")
    public String sourceUserIdentifier;
    public MergeDeveloperIdentitiesInput withSourceUserIdentifier(String sourceUserIdentifier) {
        this.sourceUserIdentifier = sourceUserIdentifier;
        return this;
    }
}
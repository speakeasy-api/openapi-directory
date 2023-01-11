package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateRepositoryRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public AssociateRepositoryRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyDetails")
    public AssociateRepositoryRequestBodyKmsKeyDetails kmsKeyDetails;
    public AssociateRepositoryRequestBody withKmsKeyDetails(AssociateRepositoryRequestBodyKmsKeyDetails kmsKeyDetails) {
        this.kmsKeyDetails = kmsKeyDetails;
        return this;
    }
    @JsonProperty("Repository")
    public AssociateRepositoryRequestBodyRepository repository;
    public AssociateRepositoryRequestBody withRepository(AssociateRepositoryRequestBodyRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public AssociateRepositoryRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}
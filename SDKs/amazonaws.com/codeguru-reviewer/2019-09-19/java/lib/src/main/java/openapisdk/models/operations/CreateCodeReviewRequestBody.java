package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCodeReviewRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public CreateCodeReviewRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateCodeReviewRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RepositoryAssociationArn")
    public String repositoryAssociationArn;
    public CreateCodeReviewRequestBody withRepositoryAssociationArn(String repositoryAssociationArn) {
        this.repositoryAssociationArn = repositoryAssociationArn;
        return this;
    }
    @JsonProperty("Type")
    public CreateCodeReviewRequestBodyType type;
    public CreateCodeReviewRequestBody withType(CreateCodeReviewRequestBodyType type) {
        this.type = type;
        return this;
    }
}
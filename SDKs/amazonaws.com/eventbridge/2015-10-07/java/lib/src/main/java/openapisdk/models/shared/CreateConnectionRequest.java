package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectionRequest {
    @JsonProperty("AuthParameters")
    public CreateConnectionAuthRequestParameters authParameters;
    public CreateConnectionRequest withAuthParameters(CreateConnectionAuthRequestParameters authParameters) {
        this.authParameters = authParameters;
        return this;
    }
    @JsonProperty("AuthorizationType")
    public ConnectionAuthorizationTypeEnum authorizationType;
    public CreateConnectionRequest withAuthorizationType(ConnectionAuthorizationTypeEnum authorizationType) {
        this.authorizationType = authorizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateConnectionRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateConnectionRequest withName(String name) {
        this.name = name;
        return this;
    }
}
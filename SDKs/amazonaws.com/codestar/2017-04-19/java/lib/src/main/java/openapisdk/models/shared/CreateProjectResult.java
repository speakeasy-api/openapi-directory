package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectResult {
    @JsonProperty("arn")
    public String arn;
    public CreateProjectResult withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateProjectResult withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CreateProjectResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectTemplateId")
    public String projectTemplateId;
    public CreateProjectResult withProjectTemplateId(String projectTemplateId) {
        this.projectTemplateId = projectTemplateId;
        return this;
    }
}
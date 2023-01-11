package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTestGridSessionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectArn")
    public String projectArn;
    public GetTestGridSessionRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionArn")
    public String sessionArn;
    public GetTestGridSessionRequest withSessionArn(String sessionArn) {
        this.sessionArn = sessionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public GetTestGridSessionRequest withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}
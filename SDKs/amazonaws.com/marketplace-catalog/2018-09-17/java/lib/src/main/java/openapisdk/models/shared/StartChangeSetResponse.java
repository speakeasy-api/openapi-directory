package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartChangeSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetArn")
    public String changeSetArn;
    public StartChangeSetResponse withChangeSetArn(String changeSetArn) {
        this.changeSetArn = changeSetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetId")
    public String changeSetId;
    public StartChangeSetResponse withChangeSetId(String changeSetId) {
        this.changeSetId = changeSetId;
        return this;
    }
}
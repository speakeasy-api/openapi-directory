package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateChangeSetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public GenerateChangeSetRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changesetFormat")
    public OutputFormatEnum changesetFormat;
    public GenerateChangeSetRequest withChangesetFormat(OutputFormatEnum changesetFormat) {
        this.changesetFormat = changesetFormat;
        return this;
    }
}
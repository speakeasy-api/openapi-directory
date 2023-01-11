package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNodegroupVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public UpdateNodegroupVersionRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public UpdateNodegroupVersionRequestBody withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchTemplate")
    public UpdateNodegroupVersionRequestBodyLaunchTemplate launchTemplate;
    public UpdateNodegroupVersionRequestBody withLaunchTemplate(UpdateNodegroupVersionRequestBodyLaunchTemplate launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseVersion")
    public String releaseVersion;
    public UpdateNodegroupVersionRequestBody withReleaseVersion(String releaseVersion) {
        this.releaseVersion = releaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public UpdateNodegroupVersionRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAppResult
 * Contains the response to a <code>CreateApp</code> request.
**/
public class CreateAppResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public String appId;
    public CreateAppResult withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}
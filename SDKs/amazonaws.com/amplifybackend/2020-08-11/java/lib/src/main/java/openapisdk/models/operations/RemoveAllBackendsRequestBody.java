package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveAllBackendsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cleanAmplifyApp")
    public Boolean cleanAmplifyApp;
    public RemoveAllBackendsRequestBody withCleanAmplifyApp(Boolean cleanAmplifyApp) {
        this.cleanAmplifyApp = cleanAmplifyApp;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplicationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application")
    public Application application;
    public UpdateApplicationResponse withApplication(Application application) {
        this.application = application;
        return this;
    }
}
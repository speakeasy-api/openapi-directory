package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApplicationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application")
    public Application application;
    public CreateApplicationResponse withApplication(Application application) {
        this.application = application;
        return this;
    }
}
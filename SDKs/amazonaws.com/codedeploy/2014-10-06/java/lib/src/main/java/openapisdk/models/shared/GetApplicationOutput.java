package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetApplicationOutput
 * Represents the output of a <code>GetApplication</code> operation.
**/
public class GetApplicationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application")
    public ApplicationInfo application;
    public GetApplicationOutput withApplication(ApplicationInfo application) {
        this.application = application;
        return this;
    }
}
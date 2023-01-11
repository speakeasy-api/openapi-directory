package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BaseResponse
 * This type defines the fields for any warning error messages.
**/
public class BaseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public BaseResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}
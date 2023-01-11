package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPageAngleResult
 * Result of performing a get-page-angle operation
**/
public class GetPageAngleResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Angle")
    public Double angle;
    public GetPageAngleResult withAngle(Double angle) {
        this.angle = angle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public GetPageAngleResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
}
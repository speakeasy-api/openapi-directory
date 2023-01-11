package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetFindingResponse
 * The response to the request.
**/
public class GetFindingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finding")
    public Finding finding;
    public GetFindingResponse withFinding(Finding finding) {
        this.finding = finding;
        return this;
    }
}
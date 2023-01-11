package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLensReviewRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensNotes")
    public String lensNotes;
    public UpdateLensReviewRequestBody withLensNotes(String lensNotes) {
        this.lensNotes = lensNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarNotes")
    public java.util.Map<String, String> pillarNotes;
    public UpdateLensReviewRequestBody withPillarNotes(java.util.Map<String, String> pillarNotes) {
        this.pillarNotes = pillarNotes;
        return this;
    }
}
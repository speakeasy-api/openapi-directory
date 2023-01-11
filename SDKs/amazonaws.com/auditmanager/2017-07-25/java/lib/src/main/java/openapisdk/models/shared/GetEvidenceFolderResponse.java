package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEvidenceFolderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceFolder")
    public AssessmentEvidenceFolder evidenceFolder;
    public GetEvidenceFolderResponse withEvidenceFolder(AssessmentEvidenceFolder evidenceFolder) {
        this.evidenceFolder = evidenceFolder;
        return this;
    }
}
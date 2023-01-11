package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DownloadRequirements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_note_required")
    public Boolean isNoteRequired;
    public DownloadRequirements withIsNoteRequired(Boolean isNoteRequired) {
        this.isNoteRequired = isNoteRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_project_code_required")
    public Boolean isProjectCodeRequired;
    public DownloadRequirements withIsProjectCodeRequired(Boolean isProjectCodeRequired) {
        this.isProjectCodeRequired = isProjectCodeRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_codes")
    public String[] projectCodes;
    public DownloadRequirements withProjectCodes(String[] projectCodes) {
        this.projectCodes = projectCodes;
        return this;
    }
}
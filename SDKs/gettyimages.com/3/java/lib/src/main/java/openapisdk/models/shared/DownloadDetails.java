package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DownloadDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_notes")
    public String downloadNotes;
    public DownloadDetails withDownloadNotes(String downloadNotes) {
        this.downloadNotes = downloadNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_code")
    public String projectCode;
    public DownloadDetails withProjectCode(String projectCode) {
        this.projectCode = projectCode;
        return this;
    }
}
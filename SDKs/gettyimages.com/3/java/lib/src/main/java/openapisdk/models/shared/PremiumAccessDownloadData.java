package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PremiumAccessDownloadData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_notes")
    public String downloadNotes;
    public PremiumAccessDownloadData withDownloadNotes(String downloadNotes) {
        this.downloadNotes = downloadNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_code")
    public String projectCode;
    public PremiumAccessDownloadData withProjectCode(String projectCode) {
        this.projectCode = projectCode;
        return this;
    }
}
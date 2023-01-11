package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FilesSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive_id")
    public String driveId;
    public FilesSearch withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
    @JsonProperty("query")
    public String query;
    public FilesSearch withQuery(String query) {
        this.query = query;
        return this;
    }
}
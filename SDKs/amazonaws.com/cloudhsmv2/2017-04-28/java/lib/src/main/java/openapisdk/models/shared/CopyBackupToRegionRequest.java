package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyBackupToRegionRequest {
    @JsonProperty("BackupId")
    public String backupId;
    public CopyBackupToRegionRequest withBackupId(String backupId) {
        this.backupId = backupId;
        return this;
    }
    @JsonProperty("DestinationRegion")
    public String destinationRegion;
    public CopyBackupToRegionRequest withDestinationRegion(String destinationRegion) {
        this.destinationRegion = destinationRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagList")
    public Tag[] tagList;
    public CopyBackupToRegionRequest withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}
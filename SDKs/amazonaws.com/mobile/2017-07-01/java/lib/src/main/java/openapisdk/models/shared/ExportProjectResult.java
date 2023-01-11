package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportProjectResult
 *  Result structure used for requests to export project configuration details. 
**/
public class ExportProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadUrl")
    public String downloadUrl;
    public ExportProjectResult withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareUrl")
    public String shareUrl;
    public ExportProjectResult withShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotId")
    public String snapshotId;
    public ExportProjectResult withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetExportSnapshotRecordsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportSnapshotRecords")
    public ExportSnapshotRecord[] exportSnapshotRecords;
    public GetExportSnapshotRecordsResult withExportSnapshotRecords(ExportSnapshotRecord[] exportSnapshotRecords) {
        this.exportSnapshotRecords = exportSnapshotRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetExportSnapshotRecordsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
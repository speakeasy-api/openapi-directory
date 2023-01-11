package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeSnapshotsResult
 * Contains the results of the <a>DescribeSnapshots</a> operation.
**/
public class DescribeSnapshotsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeSnapshotsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Snapshots")
    public Snapshot[] snapshots;
    public DescribeSnapshotsResult withSnapshots(Snapshot[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
}
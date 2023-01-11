package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReplicationSetsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListReplicationSetsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("replicationSetArns")
    public String[] replicationSetArns;
    public ListReplicationSetsOutput withReplicationSetArns(String[] replicationSetArns) {
        this.replicationSetArns = replicationSetArns;
        return this;
    }
}
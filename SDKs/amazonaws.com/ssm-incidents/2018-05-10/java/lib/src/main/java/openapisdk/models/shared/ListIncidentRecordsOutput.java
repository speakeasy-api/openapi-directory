package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIncidentRecordsOutput {
    @JsonProperty("incidentRecordSummaries")
    public IncidentRecordSummary[] incidentRecordSummaries;
    public ListIncidentRecordsOutput withIncidentRecordSummaries(IncidentRecordSummary[] incidentRecordSummaries) {
        this.incidentRecordSummaries = incidentRecordSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListIncidentRecordsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
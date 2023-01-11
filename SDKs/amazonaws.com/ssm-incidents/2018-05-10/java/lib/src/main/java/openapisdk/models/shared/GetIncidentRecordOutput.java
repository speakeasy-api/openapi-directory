package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIncidentRecordOutput {
    @JsonProperty("incidentRecord")
    public IncidentRecord incidentRecord;
    public GetIncidentRecordOutput withIncidentRecord(IncidentRecord incidentRecord) {
        this.incidentRecord = incidentRecord;
        return this;
    }
}
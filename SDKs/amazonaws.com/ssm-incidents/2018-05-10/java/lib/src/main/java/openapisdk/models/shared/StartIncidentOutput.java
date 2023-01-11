package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartIncidentOutput {
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public StartIncidentOutput withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
}
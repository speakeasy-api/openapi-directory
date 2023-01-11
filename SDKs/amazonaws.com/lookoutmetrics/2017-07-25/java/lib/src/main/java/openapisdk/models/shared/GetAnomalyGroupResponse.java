package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAnomalyGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyGroup")
    public AnomalyGroup anomalyGroup;
    public GetAnomalyGroupResponse withAnomalyGroup(AnomalyGroup anomalyGroup) {
        this.anomalyGroup = anomalyGroup;
        return this;
    }
}
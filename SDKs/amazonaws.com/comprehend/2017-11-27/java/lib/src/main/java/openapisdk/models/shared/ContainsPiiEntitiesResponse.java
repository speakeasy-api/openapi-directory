package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContainsPiiEntitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Labels")
    public EntityLabel[] labels;
    public ContainsPiiEntitiesResponse withLabels(EntityLabel[] labels) {
        this.labels = labels;
        return this;
    }
}
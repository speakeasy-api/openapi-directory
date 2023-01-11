package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PipelineStages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_order")
    public Long displayOrder;
    public PipelineStages withDisplayOrder(Long displayOrder) {
        this.displayOrder = displayOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PipelineStages withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PipelineStages withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PipelineStages withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("win_probability")
    public Long winProbability;
    public PipelineStages withWinProbability(Long winProbability) {
        this.winProbability = winProbability;
        return this;
    }
}
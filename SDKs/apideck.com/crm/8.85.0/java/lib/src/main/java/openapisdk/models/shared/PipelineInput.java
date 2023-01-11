package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PipelineInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PipelineInput withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public PipelineInput withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public PipelineInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_order")
    public Long displayOrder;
    public PipelineInput withDisplayOrder(Long displayOrder) {
        this.displayOrder = displayOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PipelineInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PipelineInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stages")
    public PipelineStagesInput[] stages;
    public PipelineInput withStages(PipelineStagesInput[] stages) {
        this.stages = stages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("win_probability_enabled")
    public Boolean winProbabilityEnabled;
    public PipelineInput withWinProbabilityEnabled(Boolean winProbabilityEnabled) {
        this.winProbabilityEnabled = winProbabilityEnabled;
        return this;
    }
}
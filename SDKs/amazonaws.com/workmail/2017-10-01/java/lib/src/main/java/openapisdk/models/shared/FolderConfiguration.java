package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FolderConfiguration
 * The configuration applied to an organization's folders by its retention policy.
**/
public class FolderConfiguration {
    @JsonProperty("Action")
    public RetentionActionEnum action;
    public FolderConfiguration withAction(RetentionActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("Name")
    public FolderNameEnum name;
    public FolderConfiguration withName(FolderNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Period")
    public Long period;
    public FolderConfiguration withPeriod(Long period) {
        this.period = period;
        return this;
    }
}
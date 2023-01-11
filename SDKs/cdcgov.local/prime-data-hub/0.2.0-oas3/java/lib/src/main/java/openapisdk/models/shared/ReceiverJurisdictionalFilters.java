package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReceiverJurisdictionalFilters
 * A single filter
**/
public class ReceiverJurisdictionalFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doesNotMatch")
    public Boolean doesNotMatch;
    public ReceiverJurisdictionalFilters withDoesNotMatch(Boolean doesNotMatch) {
        this.doesNotMatch = doesNotMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchFields")
    public ReceiverJurisdictionalFiltersMatchFieldsEnum matchFields;
    public ReceiverJurisdictionalFilters withMatchFields(ReceiverJurisdictionalFiltersMatchFieldsEnum matchFields) {
        this.matchFields = matchFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchValues")
    public String[] matchValues;
    public ReceiverJurisdictionalFilters withMatchValues(String[] matchValues) {
        this.matchValues = matchValues;
        return this;
    }
}
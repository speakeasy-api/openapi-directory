package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDatasetRequestBodyRetentionPeriod
 * How long, in days, message data is kept.
**/
public class CreateDatasetRequestBodyRetentionPeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfDays")
    public Long numberOfDays;
    public CreateDatasetRequestBodyRetentionPeriod withNumberOfDays(Long numberOfDays) {
        this.numberOfDays = numberOfDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited")
    public Boolean unlimited;
    public CreateDatasetRequestBodyRetentionPeriod withUnlimited(Boolean unlimited) {
        this.unlimited = unlimited;
        return this;
    }
}
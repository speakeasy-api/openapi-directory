package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IoTJobAbortConfig
 * Contains a list of criteria that define when and how to cancel a configuration deployment.
**/
public class IoTJobAbortConfig {
    @JsonProperty("criteriaList")
    public IoTJobAbortCriteria[] criteriaList;
    public IoTJobAbortConfig withCriteriaList(IoTJobAbortCriteria[] criteriaList) {
        this.criteriaList = criteriaList;
        return this;
    }
}
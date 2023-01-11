package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetApplicationsInput
 * Represents the input of a <code>BatchGetApplications</code> operation.
**/
public class BatchGetApplicationsInput {
    @JsonProperty("applicationNames")
    public String[] applicationNames;
    public BatchGetApplicationsInput withApplicationNames(String[] applicationNames) {
        this.applicationNames = applicationNames;
        return this;
    }
}
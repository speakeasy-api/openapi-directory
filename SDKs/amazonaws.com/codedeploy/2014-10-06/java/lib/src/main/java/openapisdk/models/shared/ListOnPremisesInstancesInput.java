package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOnPremisesInstancesInput
 * Represents the input of a <code>ListOnPremisesInstances</code> operation.
**/
public class ListOnPremisesInstancesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListOnPremisesInstancesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationStatus")
    public RegistrationStatusEnum registrationStatus;
    public ListOnPremisesInstancesInput withRegistrationStatus(RegistrationStatusEnum registrationStatus) {
        this.registrationStatus = registrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFilters")
    public TagFilter[] tagFilters;
    public ListOnPremisesInstancesInput withTagFilters(TagFilter[] tagFilters) {
        this.tagFilters = tagFilters;
        return this;
    }
}
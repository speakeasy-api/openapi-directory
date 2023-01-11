package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetCustomDataIdentifiersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDataIdentifiers")
    public BatchGetCustomDataIdentifierSummary[] customDataIdentifiers;
    public BatchGetCustomDataIdentifiersResponse withCustomDataIdentifiers(BatchGetCustomDataIdentifierSummary[] customDataIdentifiers) {
        this.customDataIdentifiers = customDataIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notFoundIdentifierIds")
    public String[] notFoundIdentifierIds;
    public BatchGetCustomDataIdentifiersResponse withNotFoundIdentifierIds(String[] notFoundIdentifierIds) {
        this.notFoundIdentifierIds = notFoundIdentifierIds;
        return this;
    }
}
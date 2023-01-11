package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetRecordRequestBody {
    @JsonProperty("Identifiers")
    public openapisdk.models.shared.BatchGetRecordIdentifier[] identifiers;
    public BatchGetRecordRequestBody withIdentifiers(openapisdk.models.shared.BatchGetRecordIdentifier[] identifiers) {
        this.identifiers = identifiers;
        return this;
    }
}
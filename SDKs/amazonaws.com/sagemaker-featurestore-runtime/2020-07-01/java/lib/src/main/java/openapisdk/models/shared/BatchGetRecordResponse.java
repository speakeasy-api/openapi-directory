package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetRecordResponse {
    @JsonProperty("Errors")
    public BatchGetRecordError[] errors;
    public BatchGetRecordResponse withErrors(BatchGetRecordError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("Records")
    public BatchGetRecordResultDetail[] records;
    public BatchGetRecordResponse withRecords(BatchGetRecordResultDetail[] records) {
        this.records = records;
        return this;
    }
    @JsonProperty("UnprocessedIdentifiers")
    public BatchGetRecordIdentifier[] unprocessedIdentifiers;
    public BatchGetRecordResponse withUnprocessedIdentifiers(BatchGetRecordIdentifier[] unprocessedIdentifiers) {
        this.unprocessedIdentifiers = unprocessedIdentifiers;
        return this;
    }
}
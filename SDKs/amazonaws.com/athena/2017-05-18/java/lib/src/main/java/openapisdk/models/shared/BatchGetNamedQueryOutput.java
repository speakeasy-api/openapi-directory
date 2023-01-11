package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetNamedQueryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamedQueries")
    public NamedQuery[] namedQueries;
    public BatchGetNamedQueryOutput withNamedQueries(NamedQuery[] namedQueries) {
        this.namedQueries = namedQueries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedNamedQueryIds")
    public UnprocessedNamedQueryId[] unprocessedNamedQueryIds;
    public BatchGetNamedQueryOutput withUnprocessedNamedQueryIds(UnprocessedNamedQueryId[] unprocessedNamedQueryIds) {
        this.unprocessedNamedQueryIds = unprocessedNamedQueryIds;
        return this;
    }
}
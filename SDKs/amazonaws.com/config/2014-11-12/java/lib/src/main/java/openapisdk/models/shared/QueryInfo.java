package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryInfo
 * Details about the query.
**/
public class QueryInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectFields")
    public FieldInfo[] selectFields;
    public QueryInfo withSelectFields(FieldInfo[] selectFields) {
        this.selectFields = selectFields;
        return this;
    }
}
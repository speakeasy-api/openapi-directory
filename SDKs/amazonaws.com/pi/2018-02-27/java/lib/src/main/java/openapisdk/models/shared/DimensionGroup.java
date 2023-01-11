package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionGroup
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
**/
public class DimensionGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public String[] dimensions;
    public DimensionGroup withDimensions(String[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("Group")
    public String group;
    public DimensionGroup withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DimensionGroup withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordColumn
 * <p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
**/
public class RecordColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mapping")
    public String mapping;
    public RecordColumn withMapping(String mapping) {
        this.mapping = mapping;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public RecordColumn withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SqlType")
    public String sqlType;
    public RecordColumn withSqlType(String sqlType) {
        this.sqlType = sqlType;
        return this;
    }
}
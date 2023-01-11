package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaColumn
 * A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.
**/
public class SchemaColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataType")
    public String dataType;
    public SchemaColumn withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SchemaColumn withName(String name) {
        this.name = name;
        return this;
    }
}
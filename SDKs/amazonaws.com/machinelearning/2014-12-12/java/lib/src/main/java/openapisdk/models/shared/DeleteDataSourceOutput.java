package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDataSourceOutput
 *  Represents the output of a <code>DeleteDataSource</code> operation.
**/
public class DeleteDataSourceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public DeleteDataSourceOutput withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
}
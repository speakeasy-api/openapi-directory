package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDataSourceOutput
 * <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
**/
public class UpdateDataSourceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public UpdateDataSourceOutput withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
}
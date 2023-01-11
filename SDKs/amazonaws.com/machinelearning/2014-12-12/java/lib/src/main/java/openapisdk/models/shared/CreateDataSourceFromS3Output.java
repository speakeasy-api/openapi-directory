package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDataSourceFromS3Output
 * <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
**/
public class CreateDataSourceFromS3Output {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public CreateDataSourceFromS3Output withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
}
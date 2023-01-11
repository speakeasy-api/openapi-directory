package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DatasetContentVersionValue
 * The dataset whose latest contents are used as input to the notebook or application.
**/
public class DatasetContentVersionValue {
    @JsonProperty("datasetName")
    public String datasetName;
    public DatasetContentVersionValue withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}
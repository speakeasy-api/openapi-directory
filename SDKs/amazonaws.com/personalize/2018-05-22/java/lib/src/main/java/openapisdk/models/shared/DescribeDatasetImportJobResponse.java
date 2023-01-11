package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDatasetImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetImportJob")
    public DatasetImportJob datasetImportJob;
    public DescribeDatasetImportJobResponse withDatasetImportJob(DatasetImportJob datasetImportJob) {
        this.datasetImportJob = datasetImportJob;
        return this;
    }
}
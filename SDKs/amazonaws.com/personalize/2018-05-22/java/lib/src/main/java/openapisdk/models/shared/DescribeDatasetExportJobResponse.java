package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDatasetExportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetExportJob")
    public DatasetExportJob datasetExportJob;
    public DescribeDatasetExportJobResponse withDatasetExportJob(DatasetExportJob datasetExportJob) {
        this.datasetExportJob = datasetExportJob;
        return this;
    }
}
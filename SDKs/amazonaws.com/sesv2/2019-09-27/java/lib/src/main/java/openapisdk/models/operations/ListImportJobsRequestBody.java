package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImportJobsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportDestinationType")
    public ListImportJobsRequestBodyImportDestinationTypeEnum importDestinationType;
    public ListImportJobsRequestBody withImportDestinationType(ListImportJobsRequestBodyImportDestinationTypeEnum importDestinationType) {
        this.importDestinationType = importDestinationType;
        return this;
    }
}
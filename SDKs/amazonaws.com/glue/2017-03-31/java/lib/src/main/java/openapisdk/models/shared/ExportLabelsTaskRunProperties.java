package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportLabelsTaskRunProperties
 * Specifies configuration properties for an exporting labels task run.
**/
public class ExportLabelsTaskRunProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputS3Path")
    public String outputS3Path;
    public ExportLabelsTaskRunProperties withOutputS3Path(String outputS3Path) {
        this.outputS3Path = outputS3Path;
        return this;
    }
}
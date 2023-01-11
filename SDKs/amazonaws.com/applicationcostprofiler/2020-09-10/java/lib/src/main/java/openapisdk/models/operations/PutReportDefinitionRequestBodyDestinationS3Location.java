package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutReportDefinitionRequestBodyDestinationS3Location
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
public class PutReportDefinitionRequestBodyDestinationS3Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public PutReportDefinitionRequestBodyDestinationS3Location withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public PutReportDefinitionRequestBodyDestinationS3Location withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}
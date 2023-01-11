package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3OutputFormatConfig
 *  The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. 
**/
public class S3OutputFormatConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationConfig")
    public AggregationConfig aggregationConfig;
    public S3OutputFormatConfig withAggregationConfig(AggregationConfig aggregationConfig) {
        this.aggregationConfig = aggregationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public FileTypeEnum fileType;
    public S3OutputFormatConfig withFileType(FileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixConfig")
    public PrefixConfig prefixConfig;
    public S3OutputFormatConfig withPrefixConfig(PrefixConfig prefixConfig) {
        this.prefixConfig = prefixConfig;
        return this;
    }
}
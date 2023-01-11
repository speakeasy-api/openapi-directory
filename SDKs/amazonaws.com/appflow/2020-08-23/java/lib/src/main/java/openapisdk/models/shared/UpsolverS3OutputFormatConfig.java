package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsolverS3OutputFormatConfig
 *  The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination. 
**/
public class UpsolverS3OutputFormatConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationConfig")
    public AggregationConfig aggregationConfig;
    public UpsolverS3OutputFormatConfig withAggregationConfig(AggregationConfig aggregationConfig) {
        this.aggregationConfig = aggregationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public FileTypeEnum fileType;
    public UpsolverS3OutputFormatConfig withFileType(FileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonProperty("prefixConfig")
    public PrefixConfig prefixConfig;
    public UpsolverS3OutputFormatConfig withPrefixConfig(PrefixConfig prefixConfig) {
        this.prefixConfig = prefixConfig;
        return this;
    }
}
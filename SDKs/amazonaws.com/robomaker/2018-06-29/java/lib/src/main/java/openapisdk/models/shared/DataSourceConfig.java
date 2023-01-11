package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DataSourceConfig
 * Information about a data source.
**/
public class DataSourceConfig {
    @JsonProperty("name")
    public String name;
    public DataSourceConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("s3Bucket")
    public String s3Bucket;
    public DataSourceConfig withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonProperty("s3Keys")
    public String[] s3Keys;
    public DataSourceConfig withS3Keys(String[] s3Keys) {
        this.s3Keys = s3Keys;
        return this;
    }
}
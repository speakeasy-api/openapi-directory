package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamoDbTarget
 * Specifies an Amazon DynamoDB table to crawl.
**/
public class DynamoDbTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public DynamoDbTarget withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanAll")
    public Boolean scanAll;
    public DynamoDbTarget withScanAll(Boolean scanAll) {
        this.scanAll = scanAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanRate")
    public Double scanRate;
    public DynamoDbTarget withScanRate(Double scanRate) {
        this.scanRate = scanRate;
        return this;
    }
}
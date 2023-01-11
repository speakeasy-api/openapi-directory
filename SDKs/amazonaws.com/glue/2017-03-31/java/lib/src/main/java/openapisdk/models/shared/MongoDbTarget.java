package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MongoDbTarget
 * Specifies an Amazon DocumentDB or MongoDB data store to crawl.
**/
public class MongoDbTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionName")
    public String connectionName;
    public MongoDbTarget withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public MongoDbTarget withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScanAll")
    public Boolean scanAll;
    public MongoDbTarget withScanAll(Boolean scanAll) {
        this.scanAll = scanAll;
        return this;
    }
}
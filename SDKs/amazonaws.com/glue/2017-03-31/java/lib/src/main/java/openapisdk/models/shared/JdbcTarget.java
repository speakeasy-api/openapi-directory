package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JdbcTarget
 * Specifies a JDBC data store to crawl.
**/
public class JdbcTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionName")
    public String connectionName;
    public JdbcTarget withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Exclusions")
    public String[] exclusions;
    public JdbcTarget withExclusions(String[] exclusions) {
        this.exclusions = exclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public JdbcTarget withPath(String path) {
        this.path = path;
        return this;
    }
}
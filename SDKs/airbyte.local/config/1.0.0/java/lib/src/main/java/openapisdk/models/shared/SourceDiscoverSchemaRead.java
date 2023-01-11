package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceDiscoverSchemaRead
 * Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.
**/
public class SourceDiscoverSchemaRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalog")
    public AirbyteCatalog catalog;
    public SourceDiscoverSchemaRead withCatalog(AirbyteCatalog catalog) {
        this.catalog = catalog;
        return this;
    }
    @JsonProperty("jobInfo")
    public SynchronousJobRead jobInfo;
    public SourceDiscoverSchemaRead withJobInfo(SynchronousJobRead jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
}
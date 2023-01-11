package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSource
 * Describes the data source that contains the data to upload to a dataset.
**/
public class DataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataLocation")
    public String dataLocation;
    public DataSource withDataLocation(String dataLocation) {
        this.dataLocation = dataLocation;
        return this;
    }
}
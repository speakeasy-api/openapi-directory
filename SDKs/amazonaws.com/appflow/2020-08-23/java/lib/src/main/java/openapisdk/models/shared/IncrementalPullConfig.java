package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncrementalPullConfig
 *  Specifies the configuration used when importing incremental records from the source. 
**/
public class IncrementalPullConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datetimeTypeFieldName")
    public String datetimeTypeFieldName;
    public IncrementalPullConfig withDatetimeTypeFieldName(String datetimeTypeFieldName) {
        this.datetimeTypeFieldName = datetimeTypeFieldName;
        return this;
    }
}
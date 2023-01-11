package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceFieldProperties
 *  The properties that can be applied to a field when the connector is being used as a source. 
**/
public class SourceFieldProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isQueryable")
    public Boolean isQueryable;
    public SourceFieldProperties withIsQueryable(Boolean isQueryable) {
        this.isQueryable = isQueryable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRetrievable")
    public Boolean isRetrievable;
    public SourceFieldProperties withIsRetrievable(Boolean isRetrievable) {
        this.isRetrievable = isRetrievable;
        return this;
    }
}
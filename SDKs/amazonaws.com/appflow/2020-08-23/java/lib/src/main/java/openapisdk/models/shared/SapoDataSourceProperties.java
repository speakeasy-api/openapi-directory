package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SapoDataSourceProperties
 *  The properties that are applied when using SAPOData as a flow source. 
**/
public class SapoDataSourceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectPath")
    public String objectPath;
    public SapoDataSourceProperties withObjectPath(String objectPath) {
        this.objectPath = objectPath;
        return this;
    }
}
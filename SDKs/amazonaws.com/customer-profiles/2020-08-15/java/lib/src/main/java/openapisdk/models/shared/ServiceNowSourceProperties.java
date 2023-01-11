package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ServiceNowSourceProperties
 * The properties that are applied when ServiceNow is being used as a source.
**/
public class ServiceNowSourceProperties {
    @JsonProperty("Object")
    public String object;
    public ServiceNowSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}
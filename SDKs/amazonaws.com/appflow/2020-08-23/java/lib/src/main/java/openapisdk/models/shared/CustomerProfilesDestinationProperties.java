package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerProfilesDestinationProperties
 *  The properties that are applied when Amazon Connect Customer Profiles is used as a destination. 
**/
public class CustomerProfilesDestinationProperties {
    @JsonProperty("domainName")
    public String domainName;
    public CustomerProfilesDestinationProperties withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTypeName")
    public String objectTypeName;
    public CustomerProfilesDestinationProperties withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
}
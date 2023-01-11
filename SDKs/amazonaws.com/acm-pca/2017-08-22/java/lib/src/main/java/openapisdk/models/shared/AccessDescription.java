package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccessDescription
 * Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.
**/
public class AccessDescription {
    @JsonProperty("AccessLocation")
    public GeneralName accessLocation;
    public AccessDescription withAccessLocation(GeneralName accessLocation) {
        this.accessLocation = accessLocation;
        return this;
    }
    @JsonProperty("AccessMethod")
    public AccessMethod accessMethod;
    public AccessDescription withAccessMethod(AccessMethod accessMethod) {
        this.accessMethod = accessMethod;
        return this;
    }
}
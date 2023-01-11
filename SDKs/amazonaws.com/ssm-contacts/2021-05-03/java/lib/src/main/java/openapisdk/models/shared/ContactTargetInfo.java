package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactTargetInfo
 * The contact that Incident Manager is engaging during an incident.
**/
public class ContactTargetInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactId")
    public String contactId;
    public ContactTargetInfo withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonProperty("IsEssential")
    public Boolean isEssential;
    public ContactTargetInfo withIsEssential(Boolean isEssential) {
        this.isEssential = isEssential;
        return this;
    }
}
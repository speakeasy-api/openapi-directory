package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NoteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public NoteInput withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_id")
    public String companyId;
    public NoteInput withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_id")
    public String contactId;
    public NoteInput withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public NoteInput withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lead_id")
    public String leadId;
    public NoteInput withLeadId(String leadId) {
        this.leadId = leadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opportunity_id")
    public String opportunityId;
    public NoteInput withOpportunityId(String opportunityId) {
        this.opportunityId = opportunityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_id")
    public String ownerId;
    public NoteInput withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public NoteInput withTitle(String title) {
        this.title = title;
        return this;
    }
}
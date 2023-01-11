package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateMailboxQuotaRequest {
    @JsonProperty("MailboxQuota")
    public Long mailboxQuota;
    public UpdateMailboxQuotaRequest withMailboxQuota(Long mailboxQuota) {
        this.mailboxQuota = mailboxQuota;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public UpdateMailboxQuotaRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public UpdateMailboxQuotaRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * WebsiteAuthorizationProviderSummary
 * The summary of the website authorization provider.
**/
public class WebsiteAuthorizationProviderSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizationProviderId")
    public String authorizationProviderId;
    public WebsiteAuthorizationProviderSummary withAuthorizationProviderId(String authorizationProviderId) {
        this.authorizationProviderId = authorizationProviderId;
        return this;
    }
    @JsonProperty("AuthorizationProviderType")
    public AuthorizationProviderTypeEnum authorizationProviderType;
    public WebsiteAuthorizationProviderSummary withAuthorizationProviderType(AuthorizationProviderTypeEnum authorizationProviderType) {
        this.authorizationProviderType = authorizationProviderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public WebsiteAuthorizationProviderSummary withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public WebsiteAuthorizationProviderSummary withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}
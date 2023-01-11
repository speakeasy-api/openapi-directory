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
 * LtiCredentials
 * A couple of LTI 1.x OAuth credentials
**/
public class LtiCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerKey")
    public String consumerKey;
    public LtiCredentials withConsumerKey(String consumerKey) {
        this.consumerKey = consumerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerSecret")
    public String consumerSecret;
    public LtiCredentials withConsumerSecret(String consumerSecret) {
        this.consumerSecret = consumerSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public LtiCredentials withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String creator;
    public LtiCredentials withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LtiCredentials withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUsage")
    public OffsetDateTime lastUsage;
    public LtiCredentials withLastUsage(OffsetDateTime lastUsage) {
        this.lastUsage = lastUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lms")
    public LmsNameEnum lms;
    public LtiCredentials withLms(LmsNameEnum lms) {
        this.lms = lms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LtiCredentials withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public LtiCredentials withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
}
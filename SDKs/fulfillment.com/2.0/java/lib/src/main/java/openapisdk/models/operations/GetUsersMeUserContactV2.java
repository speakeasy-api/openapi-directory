package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetUsersMeUserContactV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public GetUsersMeUserContactV2 withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactInfo")
    public GetUsersMeUserContactV2UserContactV2 contactInfo;
    public GetUsersMeUserContactV2 withContactInfo(GetUsersMeUserContactV2UserContactV2 contactInfo) {
        this.contactInfo = contactInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public GetUsersMeUserContactV2 withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deptLeader")
    public Boolean deptLeader;
    public GetUsersMeUserContactV2 withDeptLeader(Boolean deptLeader) {
        this.deptLeader = deptLeader;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetUsersMeUserContactV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant")
    public GetUsersMeUserContactV2Merchant merchant;
    public GetUsersMeUserContactV2 withMerchant(GetUsersMeUserContactV2Merchant merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetUsersMeUserContactV2 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Boolean status;
    public GetUsersMeUserContactV2 withStatus(Boolean status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public GetUsersMeUserContactV2 withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedBy")
    public OffsetDateTime updatedBy;
    public GetUsersMeUserContactV2 withUpdatedBy(OffsetDateTime updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public GetUsersMeUserContactV2 withUsername(String username) {
        this.username = username;
        return this;
    }
}
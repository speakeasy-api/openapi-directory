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
 * ContactData
 * Data describing a contact.
**/
public class ContactData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactId")
    public String contactId;
    public ContactData withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactStatus")
    public ContactStatusEnum contactStatus;
    public ContactData withContactStatus(ContactStatusEnum contactStatus) {
        this.contactStatus = contactStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public ContactData withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ContactData withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundStation")
    public String groundStation;
    public ContactData withGroundStation(String groundStation) {
        this.groundStation = groundStation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumElevation")
    public Elevation maximumElevation;
    public ContactData withMaximumElevation(Elevation maximumElevation) {
        this.maximumElevation = maximumElevation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missionProfileArn")
    public String missionProfileArn;
    public ContactData withMissionProfileArn(String missionProfileArn) {
        this.missionProfileArn = missionProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("postPassEndTime")
    public OffsetDateTime postPassEndTime;
    public ContactData withPostPassEndTime(OffsetDateTime postPassEndTime) {
        this.postPassEndTime = postPassEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("prePassStartTime")
    public OffsetDateTime prePassStartTime;
    public ContactData withPrePassStartTime(OffsetDateTime prePassStartTime) {
        this.prePassStartTime = prePassStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ContactData withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satelliteArn")
    public String satelliteArn;
    public ContactData withSatelliteArn(String satelliteArn) {
        this.satelliteArn = satelliteArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public ContactData withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ContactData withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}
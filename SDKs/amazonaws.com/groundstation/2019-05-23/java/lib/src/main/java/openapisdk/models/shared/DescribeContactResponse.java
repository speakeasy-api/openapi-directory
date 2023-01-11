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
 * DescribeContactResponse
 * <p/>
**/
public class DescribeContactResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactId")
    public String contactId;
    public DescribeContactResponse withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactStatus")
    public ContactStatusEnum contactStatus;
    public DescribeContactResponse withContactStatus(ContactStatusEnum contactStatus) {
        this.contactStatus = contactStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowList")
    public DataflowDetail[] dataflowList;
    public DescribeContactResponse withDataflowList(DataflowDetail[] dataflowList) {
        this.dataflowList = dataflowList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public DescribeContactResponse withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public DescribeContactResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundStation")
    public String groundStation;
    public DescribeContactResponse withGroundStation(String groundStation) {
        this.groundStation = groundStation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumElevation")
    public Elevation maximumElevation;
    public DescribeContactResponse withMaximumElevation(Elevation maximumElevation) {
        this.maximumElevation = maximumElevation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missionProfileArn")
    public String missionProfileArn;
    public DescribeContactResponse withMissionProfileArn(String missionProfileArn) {
        this.missionProfileArn = missionProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("postPassEndTime")
    public OffsetDateTime postPassEndTime;
    public DescribeContactResponse withPostPassEndTime(OffsetDateTime postPassEndTime) {
        this.postPassEndTime = postPassEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("prePassStartTime")
    public OffsetDateTime prePassStartTime;
    public DescribeContactResponse withPrePassStartTime(OffsetDateTime prePassStartTime) {
        this.prePassStartTime = prePassStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public DescribeContactResponse withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satelliteArn")
    public String satelliteArn;
    public DescribeContactResponse withSatelliteArn(String satelliteArn) {
        this.satelliteArn = satelliteArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public DescribeContactResponse withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public DescribeContactResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}
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
 * ChannelInfo
 * A structure that encapsulates a signaling channel's metadata and properties.
**/
public class ChannelInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelARN")
    public String channelARN;
    public ChannelInfo withChannelArn(String channelARN) {
        this.channelARN = channelARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelName")
    public String channelName;
    public ChannelInfo withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelStatus")
    public StatusEnum channelStatus;
    public ChannelInfo withChannelStatus(StatusEnum channelStatus) {
        this.channelStatus = channelStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelType")
    public ChannelTypeEnum channelType;
    public ChannelInfo withChannelType(ChannelTypeEnum channelType) {
        this.channelType = channelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public ChannelInfo withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SingleMasterConfiguration")
    public SingleMasterConfiguration singleMasterConfiguration;
    public ChannelInfo withSingleMasterConfiguration(SingleMasterConfiguration singleMasterConfiguration) {
        this.singleMasterConfiguration = singleMasterConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public ChannelInfo withVersion(String version) {
        this.version = version;
        return this;
    }
}
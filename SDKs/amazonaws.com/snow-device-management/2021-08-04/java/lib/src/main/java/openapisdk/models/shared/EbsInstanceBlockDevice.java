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
 * EbsInstanceBlockDevice
 * Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping.
**/
public class EbsInstanceBlockDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("attachTime")
    public OffsetDateTime attachTime;
    public EbsInstanceBlockDevice withAttachTime(OffsetDateTime attachTime) {
        this.attachTime = attachTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteOnTermination")
    public Boolean deleteOnTermination;
    public EbsInstanceBlockDevice withDeleteOnTermination(Boolean deleteOnTermination) {
        this.deleteOnTermination = deleteOnTermination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AttachmentStatusEnum status;
    public EbsInstanceBlockDevice withStatus(AttachmentStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public EbsInstanceBlockDevice withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
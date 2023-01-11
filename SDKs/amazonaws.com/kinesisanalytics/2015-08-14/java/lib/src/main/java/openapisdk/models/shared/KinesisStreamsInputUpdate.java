package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KinesisStreamsInputUpdate
 * When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.
**/
public class KinesisStreamsInputUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public KinesisStreamsInputUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARNUpdate")
    public String roleARNUpdate;
    public KinesisStreamsInputUpdate withRoleArnUpdate(String roleARNUpdate) {
        this.roleARNUpdate = roleARNUpdate;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pose
 * Indicates the pose of the face as determined by its pitch, roll, and yaw.
**/
public class Pose {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pitch")
    public Float pitch;
    public Pose withPitch(Float pitch) {
        this.pitch = pitch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Roll")
    public Float roll;
    public Pose withRoll(Float roll) {
        this.roll = roll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Yaw")
    public Float yaw;
    public Pose withYaw(Float yaw) {
        this.yaw = yaw;
        return this;
    }
}
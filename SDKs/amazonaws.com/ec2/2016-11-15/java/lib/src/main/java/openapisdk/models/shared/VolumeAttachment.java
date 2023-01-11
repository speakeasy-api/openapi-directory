package openapisdk.models.shared;



/**
 * VolumeAttachment
 * Describes volume attachment details.
**/
public class VolumeAttachment {
    public java.util.Map<String, Object> attachTime;
    public VolumeAttachment withAttachTime(java.util.Map<String, Object> attachTime) {
        this.attachTime = attachTime;
        return this;
    }
    public java.util.Map<String, Object> deleteOnTermination;
    public VolumeAttachment withDeleteOnTermination(java.util.Map<String, Object> deleteOnTermination) {
        this.deleteOnTermination = deleteOnTermination;
        return this;
    }
    public java.util.Map<String, Object> device;
    public VolumeAttachment withDevice(java.util.Map<String, Object> device) {
        this.device = device;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public VolumeAttachment withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public VolumeAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> volumeId;
    public VolumeAttachment withVolumeId(java.util.Map<String, Object> volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
package openapisdk.models.shared;



/**
 * DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute
 * The resulting set of tag keys.
**/
public class DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute {
    public java.util.Map<String, Object> includeAllTagsOfInstance;
    public DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute withIncludeAllTagsOfInstance(java.util.Map<String, Object> includeAllTagsOfInstance) {
        this.includeAllTagsOfInstance = includeAllTagsOfInstance;
        return this;
    }
    public java.util.Map<String, Object> instanceTagKeys;
    public DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute withInstanceTagKeys(java.util.Map<String, Object> instanceTagKeys) {
        this.instanceTagKeys = instanceTagKeys;
        return this;
    }
}
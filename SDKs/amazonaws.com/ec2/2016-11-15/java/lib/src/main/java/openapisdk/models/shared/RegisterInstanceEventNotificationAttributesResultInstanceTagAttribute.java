package openapisdk.models.shared;



/**
 * RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute
 * The resulting set of tag keys.
**/
public class RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute {
    public java.util.Map<String, Object> includeAllTagsOfInstance;
    public RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute withIncludeAllTagsOfInstance(java.util.Map<String, Object> includeAllTagsOfInstance) {
        this.includeAllTagsOfInstance = includeAllTagsOfInstance;
        return this;
    }
    public java.util.Map<String, Object> instanceTagKeys;
    public RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute withInstanceTagKeys(java.util.Map<String, Object> instanceTagKeys) {
        this.instanceTagKeys = instanceTagKeys;
        return this;
    }
}
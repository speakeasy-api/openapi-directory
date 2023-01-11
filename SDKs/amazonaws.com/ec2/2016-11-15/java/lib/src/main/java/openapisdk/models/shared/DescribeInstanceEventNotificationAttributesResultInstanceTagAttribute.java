package openapisdk.models.shared;



/**
 * DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute
 * Information about the registered tag keys.
**/
public class DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute {
    public java.util.Map<String, Object> includeAllTagsOfInstance;
    public DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute withIncludeAllTagsOfInstance(java.util.Map<String, Object> includeAllTagsOfInstance) {
        this.includeAllTagsOfInstance = includeAllTagsOfInstance;
        return this;
    }
    public java.util.Map<String, Object> instanceTagKeys;
    public DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute withInstanceTagKeys(java.util.Map<String, Object> instanceTagKeys) {
        this.instanceTagKeys = instanceTagKeys;
        return this;
    }
}
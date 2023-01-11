package openapisdk.models.shared;



/**
 * InstanceAttributeSourceDestCheck
 * Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is <code>true</code>, source/destination checks are enabled; otherwise, they are disabled. The default value is <code>true</code>. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
**/
public class InstanceAttributeSourceDestCheck {
    public java.util.Map<String, Object> value;
    public InstanceAttributeSourceDestCheck withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}
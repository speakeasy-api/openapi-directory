package openapisdk.models.shared;



/**
 * CreateTrafficMirrorTargetResultTrafficMirrorTarget
 * Information about the Traffic Mirror target.
**/
public class CreateTrafficMirrorTargetResultTrafficMirrorTarget {
    public java.util.Map<String, Object> description;
    public CreateTrafficMirrorTargetResultTrafficMirrorTarget withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> networkInterfaceId;
    public CreateTrafficMirrorTargetResultTrafficMirrorTarget withNetworkInterfaceId(java.util.Map<String, Object> networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    public java.util.Map<String, Object> networkLoadBalancerArn;
    public CreateTrafficMirrorTargetResultTrafficMirrorTarget withNetworkLoadBalancerArn(java.util.Map<String, Object> networkLoadBalancerArn) {
        this.networkLoadBalancerArn = networkLoadBalancerArn;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateTrafficMirrorTargetResultTrafficMirrorTarget withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateTrafficMirrorTargetResultTrafficMirrorTarget withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorTargetId;
    public CreateTrafficMirrorTargetResultTrafficMirrorTarget withTrafficMirrorTargetId(java.util.Map<String, Object> trafficMirrorTargetId) {
        this.trafficMirrorTargetId = trafficMirrorTargetId;
        return this;
    }
    public java.util.Map<String, Object> type;
    public CreateTrafficMirrorTargetResultTrafficMirrorTarget withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}
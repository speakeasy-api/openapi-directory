package openapisdk.models.shared;



public class RevokeSecurityGroupEgressResult {
    public java.util.Map<String, Object> return_;
    public RevokeSecurityGroupEgressResult withReturn(java.util.Map<String, Object> return_) {
        this.return_ = return_;
        return this;
    }
    public java.util.Map<String, Object> unknownIpPermissions;
    public RevokeSecurityGroupEgressResult withUnknownIpPermissions(java.util.Map<String, Object> unknownIpPermissions) {
        this.unknownIpPermissions = unknownIpPermissions;
        return this;
    }
}
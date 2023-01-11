package openapisdk.models.shared;



public class RevokeSecurityGroupIngressResult {
    public java.util.Map<String, Object> return_;
    public RevokeSecurityGroupIngressResult withReturn(java.util.Map<String, Object> return_) {
        this.return_ = return_;
        return this;
    }
    public java.util.Map<String, Object> unknownIpPermissions;
    public RevokeSecurityGroupIngressResult withUnknownIpPermissions(java.util.Map<String, Object> unknownIpPermissions) {
        this.unknownIpPermissions = unknownIpPermissions;
        return this;
    }
}
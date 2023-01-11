package openapisdk.models.shared;



/**
 * DisassociateIamInstanceProfileResultIamInstanceProfileAssociation
 * Information about the IAM instance profile association.
**/
public class DisassociateIamInstanceProfileResultIamInstanceProfileAssociation {
    public java.util.Map<String, Object> associationId;
    public DisassociateIamInstanceProfileResultIamInstanceProfileAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile iamInstanceProfile;
    public DisassociateIamInstanceProfileResultIamInstanceProfileAssociation withIamInstanceProfile(DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile iamInstanceProfile) {
        this.iamInstanceProfile = iamInstanceProfile;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public DisassociateIamInstanceProfileResultIamInstanceProfileAssociation withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DisassociateIamInstanceProfileResultIamInstanceProfileAssociation withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> timestamp;
    public DisassociateIamInstanceProfileResultIamInstanceProfileAssociation withTimestamp(java.util.Map<String, Object> timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}
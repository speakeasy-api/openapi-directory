package openapisdk.models.shared;



/**
 * AssociateIamInstanceProfileResultIamInstanceProfileAssociation
 * Information about the IAM instance profile association.
**/
public class AssociateIamInstanceProfileResultIamInstanceProfileAssociation {
    public java.util.Map<String, Object> associationId;
    public AssociateIamInstanceProfileResultIamInstanceProfileAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile iamInstanceProfile;
    public AssociateIamInstanceProfileResultIamInstanceProfileAssociation withIamInstanceProfile(AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile iamInstanceProfile) {
        this.iamInstanceProfile = iamInstanceProfile;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public AssociateIamInstanceProfileResultIamInstanceProfileAssociation withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public AssociateIamInstanceProfileResultIamInstanceProfileAssociation withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> timestamp;
    public AssociateIamInstanceProfileResultIamInstanceProfileAssociation withTimestamp(java.util.Map<String, Object> timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}
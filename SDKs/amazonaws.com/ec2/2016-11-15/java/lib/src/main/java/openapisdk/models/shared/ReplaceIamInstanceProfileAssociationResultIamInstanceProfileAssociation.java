package openapisdk.models.shared;



/**
 * ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation
 * Information about the IAM instance profile association.
**/
public class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation {
    public java.util.Map<String, Object> associationId;
    public ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile iamInstanceProfile;
    public ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation withIamInstanceProfile(ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile iamInstanceProfile) {
        this.iamInstanceProfile = iamInstanceProfile;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> timestamp;
    public ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation withTimestamp(java.util.Map<String, Object> timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}
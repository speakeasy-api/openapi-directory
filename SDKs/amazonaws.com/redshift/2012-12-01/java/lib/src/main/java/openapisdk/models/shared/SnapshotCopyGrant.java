package openapisdk.models.shared;



/**
 * SnapshotCopyGrant
 * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from Amazon Web Services KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
**/
public class SnapshotCopyGrant {
    public String kmsKeyId;
    public SnapshotCopyGrant withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public String snapshotCopyGrantName;
    public SnapshotCopyGrant withSnapshotCopyGrantName(String snapshotCopyGrantName) {
        this.snapshotCopyGrantName = snapshotCopyGrantName;
        return this;
    }
    public TagList[] tags;
    public SnapshotCopyGrant withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}
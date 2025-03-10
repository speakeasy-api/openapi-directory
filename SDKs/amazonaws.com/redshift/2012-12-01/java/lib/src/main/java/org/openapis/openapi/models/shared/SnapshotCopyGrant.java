/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * SnapshotCopyGrant - &lt;p&gt;The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified encrypted symmetric key from Amazon Web Services KMS in the destination region.&lt;/p&gt; &lt;p&gt; For more information about managing snapshot copy grants, go to &lt;a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html"&gt;Amazon Redshift Database Encryption&lt;/a&gt; in the &lt;i&gt;Amazon Redshift Cluster Management Guide&lt;/i&gt;. &lt;/p&gt;
 */
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
    
    public SnapshotCopyGrant(){}
}

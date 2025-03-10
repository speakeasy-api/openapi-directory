/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * CopyDBClusterSnapshotResult - Success
 */
public class CopyDBClusterSnapshotResult {
    /**
     * Detailed information about a cluster snapshot. 
     */
    
    public DBClusterSnapshot dbClusterSnapshot;

    public CopyDBClusterSnapshotResult withDBClusterSnapshot(DBClusterSnapshot dbClusterSnapshot) {
        this.dbClusterSnapshot = dbClusterSnapshot;
        return this;
    }
    
    public CopyDBClusterSnapshotResult(){}
}

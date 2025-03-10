/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CopyDBSnapshotMessage {
    
    public String sourceDBSnapshotIdentifier;

    public CopyDBSnapshotMessage withSourceDBSnapshotIdentifier(String sourceDBSnapshotIdentifier) {
        this.sourceDBSnapshotIdentifier = sourceDBSnapshotIdentifier;
        return this;
    }
    
    
    public TagList[] tags;

    public CopyDBSnapshotMessage withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
    
    
    public String targetDBSnapshotIdentifier;

    public CopyDBSnapshotMessage withTargetDBSnapshotIdentifier(String targetDBSnapshotIdentifier) {
        this.targetDBSnapshotIdentifier = targetDBSnapshotIdentifier;
        return this;
    }
    
    public CopyDBSnapshotMessage(@JsonProperty("SourceDBSnapshotIdentifier") String sourceDBSnapshotIdentifier, @JsonProperty("TargetDBSnapshotIdentifier") String targetDBSnapshotIdentifier) {
        this.sourceDBSnapshotIdentifier = sourceDBSnapshotIdentifier;
        this.targetDBSnapshotIdentifier = targetDBSnapshotIdentifier;
  }
}

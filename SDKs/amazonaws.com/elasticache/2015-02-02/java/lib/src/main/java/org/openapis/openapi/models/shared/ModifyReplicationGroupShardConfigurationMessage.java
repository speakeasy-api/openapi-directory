/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ModifyReplicationGroupShardConfigurationMessage - Represents the input for a &lt;code&gt;ModifyReplicationGroupShardConfiguration&lt;/code&gt; operation.
 */
public class ModifyReplicationGroupShardConfigurationMessage {
    
    public Boolean applyImmediately;

    public ModifyReplicationGroupShardConfigurationMessage withApplyImmediately(Boolean applyImmediately) {
        this.applyImmediately = applyImmediately;
        return this;
    }
    
    
    public Long nodeGroupCount;

    public ModifyReplicationGroupShardConfigurationMessage withNodeGroupCount(Long nodeGroupCount) {
        this.nodeGroupCount = nodeGroupCount;
        return this;
    }
    
    
    public String[] nodeGroupsToRemove;

    public ModifyReplicationGroupShardConfigurationMessage withNodeGroupsToRemove(String[] nodeGroupsToRemove) {
        this.nodeGroupsToRemove = nodeGroupsToRemove;
        return this;
    }
    
    
    public String[] nodeGroupsToRetain;

    public ModifyReplicationGroupShardConfigurationMessage withNodeGroupsToRetain(String[] nodeGroupsToRetain) {
        this.nodeGroupsToRetain = nodeGroupsToRetain;
        return this;
    }
    
    
    public String replicationGroupId;

    public ModifyReplicationGroupShardConfigurationMessage withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    
    
    public ReshardingConfigurationList[] reshardingConfiguration;

    public ModifyReplicationGroupShardConfigurationMessage withReshardingConfiguration(ReshardingConfigurationList[] reshardingConfiguration) {
        this.reshardingConfiguration = reshardingConfiguration;
        return this;
    }
    
    public ModifyReplicationGroupShardConfigurationMessage(@JsonProperty("ApplyImmediately") Boolean applyImmediately, @JsonProperty("NodeGroupCount") Long nodeGroupCount, @JsonProperty("ReplicationGroupId") String replicationGroupId) {
        this.applyImmediately = applyImmediately;
        this.nodeGroupCount = nodeGroupCount;
        this.replicationGroupId = replicationGroupId;
  }
}

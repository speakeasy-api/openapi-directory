package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultiRegionConfiguration
 * <p>Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.</p> <p>For more information about any listed KMS key, use the <a>DescribeKey</a> operation.</p>
**/
public class MultiRegionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiRegionKeyType")
    public MultiRegionKeyTypeEnum multiRegionKeyType;
    public MultiRegionConfiguration withMultiRegionKeyType(MultiRegionKeyTypeEnum multiRegionKeyType) {
        this.multiRegionKeyType = multiRegionKeyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryKey")
    public MultiRegionKey primaryKey;
    public MultiRegionConfiguration withPrimaryKey(MultiRegionKey primaryKey) {
        this.primaryKey = primaryKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicaKeys")
    public MultiRegionKey[] replicaKeys;
    public MultiRegionConfiguration withReplicaKeys(MultiRegionKey[] replicaKeys) {
        this.replicaKeys = replicaKeys;
        return this;
    }
}
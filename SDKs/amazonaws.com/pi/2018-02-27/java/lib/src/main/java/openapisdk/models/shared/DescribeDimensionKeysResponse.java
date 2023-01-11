package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeDimensionKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("AlignedEndTime")
    public OffsetDateTime alignedEndTime;
    public DescribeDimensionKeysResponse withAlignedEndTime(OffsetDateTime alignedEndTime) {
        this.alignedEndTime = alignedEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("AlignedStartTime")
    public OffsetDateTime alignedStartTime;
    public DescribeDimensionKeysResponse withAlignedStartTime(OffsetDateTime alignedStartTime) {
        this.alignedStartTime = alignedStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keys")
    public DimensionKeyDescription[] keys;
    public DescribeDimensionKeysResponse withKeys(DimensionKeyDescription[] keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeDimensionKeysResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionKeys")
    public ResponsePartitionKey[] partitionKeys;
    public DescribeDimensionKeysResponse withPartitionKeys(ResponsePartitionKey[] partitionKeys) {
        this.partitionKeys = partitionKeys;
        return this;
    }
}
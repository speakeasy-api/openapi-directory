package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrcSerDe
 * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.
**/
public class OrcSerDe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlockSizeBytes")
    public Long blockSizeBytes;
    public OrcSerDe withBlockSizeBytes(Long blockSizeBytes) {
        this.blockSizeBytes = blockSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BloomFilterColumns")
    public String[] bloomFilterColumns;
    public OrcSerDe withBloomFilterColumns(String[] bloomFilterColumns) {
        this.bloomFilterColumns = bloomFilterColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BloomFilterFalsePositiveProbability")
    public Double bloomFilterFalsePositiveProbability;
    public OrcSerDe withBloomFilterFalsePositiveProbability(Double bloomFilterFalsePositiveProbability) {
        this.bloomFilterFalsePositiveProbability = bloomFilterFalsePositiveProbability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Compression")
    public OrcCompressionEnum compression;
    public OrcSerDe withCompression(OrcCompressionEnum compression) {
        this.compression = compression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DictionaryKeyThreshold")
    public Double dictionaryKeyThreshold;
    public OrcSerDe withDictionaryKeyThreshold(Double dictionaryKeyThreshold) {
        this.dictionaryKeyThreshold = dictionaryKeyThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnablePadding")
    public Boolean enablePadding;
    public OrcSerDe withEnablePadding(Boolean enablePadding) {
        this.enablePadding = enablePadding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FormatVersion")
    public OrcFormatVersionEnum formatVersion;
    public OrcSerDe withFormatVersion(OrcFormatVersionEnum formatVersion) {
        this.formatVersion = formatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaddingTolerance")
    public Double paddingTolerance;
    public OrcSerDe withPaddingTolerance(Double paddingTolerance) {
        this.paddingTolerance = paddingTolerance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RowIndexStride")
    public Long rowIndexStride;
    public OrcSerDe withRowIndexStride(Long rowIndexStride) {
        this.rowIndexStride = rowIndexStride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StripeSizeBytes")
    public Long stripeSizeBytes;
    public OrcSerDe withStripeSizeBytes(Long stripeSizeBytes) {
        this.stripeSizeBytes = stripeSizeBytes;
        return this;
    }
}
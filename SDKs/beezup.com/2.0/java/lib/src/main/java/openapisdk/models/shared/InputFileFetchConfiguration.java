package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputFileFetchConfiguration
 * Describe the way to download the file
**/
public class InputFileFetchConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compressedRelativePath")
    public String compressedRelativePath;
    public InputFileFetchConfiguration withCompressedRelativePath(String compressedRelativePath) {
        this.compressedRelativePath = compressedRelativePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compressionFormatStrategy")
    public CompressionFormatStrategyEnum compressionFormatStrategy;
    public InputFileFetchConfiguration withCompressionFormatStrategy(CompressionFormatStrategyEnum compressionFormatStrategy) {
        this.compressionFormatStrategy = compressionFormatStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential")
    public Credential credential;
    public InputFileFetchConfiguration withCredential(Credential credential) {
        this.credential = credential;
        return this;
    }
    @JsonProperty("downloadCatalogStrategy")
    public DownloadCatalogStrategyEnum downloadCatalogStrategy;
    public InputFileFetchConfiguration withDownloadCatalogStrategy(DownloadCatalogStrategyEnum downloadCatalogStrategy) {
        this.downloadCatalogStrategy = downloadCatalogStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadTimeout")
    public Integer downloadTimeout;
    public InputFileFetchConfiguration withDownloadTimeout(Integer downloadTimeout) {
        this.downloadTimeout = downloadTimeout;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public InputFileFetchConfiguration withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
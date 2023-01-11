package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputDataConfig
 * The input properties for an inference job.
**/
public class InputDataConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentReaderConfig")
    public DocumentReaderConfig documentReaderConfig;
    public InputDataConfig withDocumentReaderConfig(DocumentReaderConfig documentReaderConfig) {
        this.documentReaderConfig = documentReaderConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputFormat")
    public InputFormatEnum inputFormat;
    public InputDataConfig withInputFormat(InputFormatEnum inputFormat) {
        this.inputFormat = inputFormat;
        return this;
    }
    @JsonProperty("S3Uri")
    public String s3Uri;
    public InputDataConfig withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}
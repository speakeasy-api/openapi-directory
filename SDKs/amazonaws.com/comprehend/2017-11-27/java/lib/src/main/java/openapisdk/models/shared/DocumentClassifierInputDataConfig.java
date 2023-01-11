package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentClassifierInputDataConfig
 * <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
**/
public class DocumentClassifierInputDataConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AugmentedManifests")
    public AugmentedManifestsListItem[] augmentedManifests;
    public DocumentClassifierInputDataConfig withAugmentedManifests(AugmentedManifestsListItem[] augmentedManifests) {
        this.augmentedManifests = augmentedManifests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFormat")
    public DocumentClassifierDataFormatEnum dataFormat;
    public DocumentClassifierInputDataConfig withDataFormat(DocumentClassifierDataFormatEnum dataFormat) {
        this.dataFormat = dataFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LabelDelimiter")
    public String labelDelimiter;
    public DocumentClassifierInputDataConfig withLabelDelimiter(String labelDelimiter) {
        this.labelDelimiter = labelDelimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Uri")
    public String s3Uri;
    public DocumentClassifierInputDataConfig withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}
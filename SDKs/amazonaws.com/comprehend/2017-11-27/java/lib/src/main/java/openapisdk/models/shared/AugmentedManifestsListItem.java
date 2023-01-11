package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AugmentedManifestsListItem
 * An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
**/
public class AugmentedManifestsListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnotationDataS3Uri")
    public String annotationDataS3Uri;
    public AugmentedManifestsListItem withAnnotationDataS3Uri(String annotationDataS3Uri) {
        this.annotationDataS3Uri = annotationDataS3Uri;
        return this;
    }
    @JsonProperty("AttributeNames")
    public String[] attributeNames;
    public AugmentedManifestsListItem withAttributeNames(String[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentType")
    public AugmentedManifestsDocumentTypeFormatEnum documentType;
    public AugmentedManifestsListItem withDocumentType(AugmentedManifestsDocumentTypeFormatEnum documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonProperty("S3Uri")
    public String s3Uri;
    public AugmentedManifestsListItem withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceDocumentsS3Uri")
    public String sourceDocumentsS3Uri;
    public AugmentedManifestsListItem withSourceDocumentsS3Uri(String sourceDocumentsS3Uri) {
        this.sourceDocumentsS3Uri = sourceDocumentsS3Uri;
        return this;
    }
}
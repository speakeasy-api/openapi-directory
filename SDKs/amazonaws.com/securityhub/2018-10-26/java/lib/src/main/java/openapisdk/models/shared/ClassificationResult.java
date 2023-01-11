package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassificationResult
 * Details about the sensitive data that was detected on the resource.
**/
public class ClassificationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalOccurrences")
    public Boolean additionalOccurrences;
    public ClassificationResult withAdditionalOccurrences(Boolean additionalOccurrences) {
        this.additionalOccurrences = additionalOccurrences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDataIdentifiers")
    public CustomDataIdentifiersResult customDataIdentifiers;
    public ClassificationResult withCustomDataIdentifiers(CustomDataIdentifiersResult customDataIdentifiers) {
        this.customDataIdentifiers = customDataIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MimeType")
    public String mimeType;
    public ClassificationResult withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SensitiveData")
    public SensitiveDataResult[] sensitiveData;
    public ClassificationResult withSensitiveData(SensitiveDataResult[] sensitiveData) {
        this.sensitiveData = sensitiveData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeClassified")
    public Long sizeClassified;
    public ClassificationResult withSizeClassified(Long sizeClassified) {
        this.sizeClassified = sizeClassified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ClassificationStatus status;
    public ClassificationResult withStatus(ClassificationStatus status) {
        this.status = status;
        return this;
    }
}
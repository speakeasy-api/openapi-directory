package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductOrderUboRequestBody {
    @SpeakeasyMetadata("form:name=callbackUrl")
    public String callbackUrl;
    public ProductOrderUboRequestBody withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=credits")
    public Double credits;
    public ProductOrderUboRequestBody withCredits(Double credits) {
        this.credits = credits;
        return this;
    }
    @SpeakeasyMetadata("form:name=includeDocs")
    public Boolean includeDocs;
    public ProductOrderUboRequestBody withIncludeDocs(Boolean includeDocs) {
        this.includeDocs = includeDocs;
        return this;
    }
    @SpeakeasyMetadata("form:name=levels")
    public String levels;
    public ProductOrderUboRequestBody withLevels(String levels) {
        this.levels = levels;
        return this;
    }
    @SpeakeasyMetadata("form:name=strategy")
    public String strategy;
    public ProductOrderUboRequestBody withStrategy(String strategy) {
        this.strategy = strategy;
        return this;
    }
    @SpeakeasyMetadata("form:name=subjectId")
    public String subjectId;
    public ProductOrderUboRequestBody withSubjectId(String subjectId) {
        this.subjectId = subjectId;
        return this;
    }
}
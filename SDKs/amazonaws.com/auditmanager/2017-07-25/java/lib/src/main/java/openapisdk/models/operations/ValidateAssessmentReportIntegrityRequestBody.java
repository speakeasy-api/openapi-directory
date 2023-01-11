package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ValidateAssessmentReportIntegrityRequestBody {
    @JsonProperty("s3RelativePath")
    public String s3RelativePath;
    public ValidateAssessmentReportIntegrityRequestBody withS3RelativePath(String s3RelativePath) {
        this.s3RelativePath = s3RelativePath;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnrollClassPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enrollmentCode")
    public String enrollmentCode;
    public EnrollClassPathParams withEnrollmentCode(String enrollmentCode) {
        this.enrollmentCode = enrollmentCode;
        return this;
    }
}
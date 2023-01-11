package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkcerRequestBodyCertificateParameters {
    @JsonProperty("COURSE_NO")
    public String courseNO;
    public SkcerRequestBodyCertificateParameters withCourseNo(String courseNO) {
        this.courseNO = courseNO;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SkcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("certificate_type")
    public String certificateType;
    public SkcerRequestBodyCertificateParameters withCertificateType(String certificateType) {
        this.certificateType = certificateType;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExpiredCert {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_hash")
    public String fileHash;
    public ExpiredCert withFileHash(String fileHash) {
        this.fileHash = fileHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_name")
    public String fileName;
    public ExpiredCert withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_key")
    public ExpiredCertPublicKey publicKey;
    public ExpiredCert withPublicKey(ExpiredCertPublicKey publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject_name")
    public String subjectName;
    public ExpiredCert withSubjectName(String subjectName) {
        this.subjectName = subjectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_print")
    public String thumbPrint;
    public ExpiredCert withThumbPrint(String thumbPrint) {
        this.thumbPrint = thumbPrint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid_from")
    public String validFrom;
    public ExpiredCert withValidFrom(String validFrom) {
        this.validFrom = validFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid_to")
    public String validTo;
    public ExpiredCert withValidTo(String validTo) {
        this.validTo = validTo;
        return this;
    }
}
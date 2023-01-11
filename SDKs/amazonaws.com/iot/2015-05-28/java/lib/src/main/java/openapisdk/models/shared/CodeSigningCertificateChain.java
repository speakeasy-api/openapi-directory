package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeSigningCertificateChain
 * Describes the certificate chain being used when code signing a file.
**/
public class CodeSigningCertificateChain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateName")
    public String certificateName;
    public CodeSigningCertificateChain withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlineDocument")
    public String inlineDocument;
    public CodeSigningCertificateChain withInlineDocument(String inlineDocument) {
        this.inlineDocument = inlineDocument;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiPassthrough
 * <p>Contains X.509 certificate information to be placed in an issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. </p> <p>If conflicting or duplicate certificate information is supplied from other sources, ACM Private CA applies <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p>
**/
public class ApiPassthrough {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Extensions")
    public Extensions extensions;
    public ApiPassthrough withExtensions(Extensions extensions) {
        this.extensions = extensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subject")
    public Asn1Subject subject;
    public ApiPassthrough withSubject(Asn1Subject subject) {
        this.subject = subject;
        return this;
    }
}
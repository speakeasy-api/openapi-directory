package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * XssMatchSet
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p>
**/
public class XssMatchSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public XssMatchSet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("XssMatchSetId")
    public String xssMatchSetId;
    public XssMatchSet withXssMatchSetId(String xssMatchSetId) {
        this.xssMatchSetId = xssMatchSetId;
        return this;
    }
    @JsonProperty("XssMatchTuples")
    public XssMatchTuple[] xssMatchTuples;
    public XssMatchSet withXssMatchTuples(XssMatchTuple[] xssMatchTuples) {
        this.xssMatchTuples = xssMatchTuples;
        return this;
    }
}
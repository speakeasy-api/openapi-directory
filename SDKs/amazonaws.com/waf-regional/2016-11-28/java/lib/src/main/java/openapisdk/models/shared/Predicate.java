package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Predicate
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p>
**/
public class Predicate {
    @JsonProperty("DataId")
    public String dataId;
    public Predicate withDataId(String dataId) {
        this.dataId = dataId;
        return this;
    }
    @JsonProperty("Negated")
    public Boolean negated;
    public Predicate withNegated(Boolean negated) {
        this.negated = negated;
        return this;
    }
    @JsonProperty("Type")
    public PredicateTypeEnum type;
    public Predicate withType(PredicateTypeEnum type) {
        this.type = type;
        return this;
    }
}
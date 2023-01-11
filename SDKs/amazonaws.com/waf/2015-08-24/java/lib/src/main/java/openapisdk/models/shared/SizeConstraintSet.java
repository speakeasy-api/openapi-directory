package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SizeConstraintSet
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p>
**/
public class SizeConstraintSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SizeConstraintSet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SizeConstraintSetId")
    public String sizeConstraintSetId;
    public SizeConstraintSet withSizeConstraintSetId(String sizeConstraintSetId) {
        this.sizeConstraintSetId = sizeConstraintSetId;
        return this;
    }
    @JsonProperty("SizeConstraints")
    public SizeConstraint[] sizeConstraints;
    public SizeConstraintSet withSizeConstraints(SizeConstraint[] sizeConstraints) {
        this.sizeConstraints = sizeConstraints;
        return this;
    }
}
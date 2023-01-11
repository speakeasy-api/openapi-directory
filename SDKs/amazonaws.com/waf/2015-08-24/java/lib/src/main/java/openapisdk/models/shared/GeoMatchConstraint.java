package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GeoMatchConstraint
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p>
**/
public class GeoMatchConstraint {
    @JsonProperty("Type")
    public GeoMatchConstraintTypeEnum type;
    public GeoMatchConstraint withType(GeoMatchConstraintTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("Value")
    public GeoMatchConstraintValueEnum value;
    public GeoMatchConstraint withValue(GeoMatchConstraintValueEnum value) {
        this.value = value;
        return this;
    }
}
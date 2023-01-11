package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoMatchSet
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p>
**/
public class GeoMatchSet {
    @JsonProperty("GeoMatchConstraints")
    public GeoMatchConstraint[] geoMatchConstraints;
    public GeoMatchSet withGeoMatchConstraints(GeoMatchConstraint[] geoMatchConstraints) {
        this.geoMatchConstraints = geoMatchConstraints;
        return this;
    }
    @JsonProperty("GeoMatchSetId")
    public String geoMatchSetId;
    public GeoMatchSet withGeoMatchSetId(String geoMatchSetId) {
        this.geoMatchSetId = geoMatchSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GeoMatchSet withName(String name) {
        this.name = name;
        return this;
    }
}
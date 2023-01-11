package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ByteMatchSetSummary
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p>
**/
public class ByteMatchSetSummary {
    @JsonProperty("ByteMatchSetId")
    public String byteMatchSetId;
    public ByteMatchSetSummary withByteMatchSetId(String byteMatchSetId) {
        this.byteMatchSetId = byteMatchSetId;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ByteMatchSetSummary withName(String name) {
        this.name = name;
        return this;
    }
}
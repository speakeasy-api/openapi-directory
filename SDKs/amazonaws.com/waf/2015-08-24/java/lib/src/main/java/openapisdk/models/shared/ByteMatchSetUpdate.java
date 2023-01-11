package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ByteMatchSetUpdate
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p>
**/
public class ByteMatchSetUpdate {
    @JsonProperty("Action")
    public ChangeActionEnum action;
    public ByteMatchSetUpdate withAction(ChangeActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("ByteMatchTuple")
    public ByteMatchTuple byteMatchTuple;
    public ByteMatchSetUpdate withByteMatchTuple(ByteMatchTuple byteMatchTuple) {
        this.byteMatchTuple = byteMatchTuple;
        return this;
    }
}
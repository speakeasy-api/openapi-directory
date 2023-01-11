package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ByteMatchTuple
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>
**/
public class ByteMatchTuple {
    @JsonProperty("FieldToMatch")
    public FieldToMatch fieldToMatch;
    public ByteMatchTuple withFieldToMatch(FieldToMatch fieldToMatch) {
        this.fieldToMatch = fieldToMatch;
        return this;
    }
    @JsonProperty("PositionalConstraint")
    public PositionalConstraintEnum positionalConstraint;
    public ByteMatchTuple withPositionalConstraint(PositionalConstraintEnum positionalConstraint) {
        this.positionalConstraint = positionalConstraint;
        return this;
    }
    @JsonProperty("TargetString")
    public String targetString;
    public ByteMatchTuple withTargetString(String targetString) {
        this.targetString = targetString;
        return this;
    }
    @JsonProperty("TextTransformation")
    public TextTransformationEnum textTransformation;
    public ByteMatchTuple withTextTransformation(TextTransformationEnum textTransformation) {
        this.textTransformation = textTransformation;
        return this;
    }
}
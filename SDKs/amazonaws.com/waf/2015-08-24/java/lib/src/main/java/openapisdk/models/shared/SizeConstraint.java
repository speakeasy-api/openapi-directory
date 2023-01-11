package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SizeConstraint
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p>
**/
public class SizeConstraint {
    @JsonProperty("ComparisonOperator")
    public ComparisonOperatorEnum comparisonOperator;
    public SizeConstraint withComparisonOperator(ComparisonOperatorEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonProperty("FieldToMatch")
    public FieldToMatch fieldToMatch;
    public SizeConstraint withFieldToMatch(FieldToMatch fieldToMatch) {
        this.fieldToMatch = fieldToMatch;
        return this;
    }
    @JsonProperty("Size")
    public Long size;
    public SizeConstraint withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonProperty("TextTransformation")
    public TextTransformationEnum textTransformation;
    public SizeConstraint withTextTransformation(TextTransformationEnum textTransformation) {
        this.textTransformation = textTransformation;
        return this;
    }
}
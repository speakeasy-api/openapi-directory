package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegexPatternSet
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
**/
public class RegexPatternSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RegexPatternSet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RegexPatternSetId")
    public String regexPatternSetId;
    public RegexPatternSet withRegexPatternSetId(String regexPatternSetId) {
        this.regexPatternSetId = regexPatternSetId;
        return this;
    }
    @JsonProperty("RegexPatternStrings")
    public String[] regexPatternStrings;
    public RegexPatternSet withRegexPatternStrings(String[] regexPatternStrings) {
        this.regexPatternStrings = regexPatternStrings;
        return this;
    }
}
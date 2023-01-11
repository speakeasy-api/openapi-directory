package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlInjectionMatchSet
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p>
**/
public class SqlInjectionMatchSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SqlInjectionMatchSet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SqlInjectionMatchSetId")
    public String sqlInjectionMatchSetId;
    public SqlInjectionMatchSet withSqlInjectionMatchSetId(String sqlInjectionMatchSetId) {
        this.sqlInjectionMatchSetId = sqlInjectionMatchSetId;
        return this;
    }
    @JsonProperty("SqlInjectionMatchTuples")
    public SqlInjectionMatchTuple[] sqlInjectionMatchTuples;
    public SqlInjectionMatchSet withSqlInjectionMatchTuples(SqlInjectionMatchTuple[] sqlInjectionMatchTuples) {
        this.sqlInjectionMatchTuples = sqlInjectionMatchTuples;
        return this;
    }
}
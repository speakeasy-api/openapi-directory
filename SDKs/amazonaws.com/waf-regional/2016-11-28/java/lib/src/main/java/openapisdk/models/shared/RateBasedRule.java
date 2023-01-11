package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateBasedRule
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p>
**/
public class RateBasedRule {
    @JsonProperty("MatchPredicates")
    public Predicate[] matchPredicates;
    public RateBasedRule withMatchPredicates(Predicate[] matchPredicates) {
        this.matchPredicates = matchPredicates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public String metricName;
    public RateBasedRule withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RateBasedRule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RateKey")
    public RateKeyEnum rateKey;
    public RateBasedRule withRateKey(RateKeyEnum rateKey) {
        this.rateKey = rateKey;
        return this;
    }
    @JsonProperty("RateLimit")
    public Long rateLimit;
    public RateBasedRule withRateLimit(Long rateLimit) {
        this.rateLimit = rateLimit;
        return this;
    }
    @JsonProperty("RuleId")
    public String ruleId;
    public RateBasedRule withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}
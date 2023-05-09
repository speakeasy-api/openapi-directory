# SDK

## Overview

<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>This is the <i>AWS WAF Regional Classic API Reference</i> for using AWS WAF Classic with the AWS resources, Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. The AWS WAF Classic actions and data types listed in the reference are available for protecting Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. You can use these actions and data types by means of the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Regions and Endpoints</a>. This guide is for developers who need detailed information about the AWS WAF Classic API actions, data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/waf-regional/>
### Available Operations

* [associateWebACL](#associatewebacl) - <note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a web ACL with a resource, either an application load balancer or Amazon API Gateway stage.</p>
* [createByteMatchSet](#createbytematchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createGeoMatchSet](#creategeomatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createIPSet](#createipset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>IPSet</a>, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that contains those IP addresses and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateIPSet</code> request.</p> </li> <li> <p>Submit a <code>CreateIPSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createRateBasedRule](#createratebasedrule) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The <code>RateBasedRule</code> also contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to count or block if these requests exceed the <code>RateLimit</code>.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not only must exceed the <code>RateLimit</code>, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p> <p>To create and configure a <code>RateBasedRule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the rule. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRateBasedRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates that you want to include in the rule.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createRegexMatchSet](#createregexmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createRegexPatternSet](#createregexpatternset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createRule](#createrule) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a <code>Rule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createRuleGroup](#createrulegroup) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createSizeConstraintSet](#createsizeconstraintset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string. For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createSqlInjectionMatchSet](#createsqlinjectionmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>SqlInjectionMatchSet</a>, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateSqlInjectionMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createWebACL](#createwebacl) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p> <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateWebACL</code> request.</p> </li> <li> <p>Submit a <code>CreateWebACL</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p> </li> </ol> <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [createWebACLMigrationStack](#createwebaclmigrationstack) - <p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p> <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p>
* [createXssMatchSet](#createxssmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateXssMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [deleteByteMatchSet](#deletebytematchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>ByteMatchSet</a>. You can't delete a <code>ByteMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p> <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteByteMatchSet</code> request.</p> </li> </ol>
* [deleteGeoMatchSet](#deletegeomatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any countries.</p> <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteGeoMatchSet</code> request.</p> </li> </ol>
* [deleteIPSet](#deleteipset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>IPSet</a>. You can't delete an <code>IPSet</code> if it's still used in any <code>Rules</code> or if it still includes any IP addresses.</p> <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteIPSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteIPSet</code> request.</p> </li> </ol>
* [deleteLoggingConfiguration](#deleteloggingconfiguration) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>
* [deletePermissionPolicy](#deletepermissionpolicy) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an IAM policy from the specified RuleGroup.</p> <p>The user making the request must be the owner of the RuleGroup.</p>
* [deleteRateBasedRule](#deleteratebasedrule) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more information, see <a>UpdateRateBasedRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRateBasedRule</code> request.</p> </li> </ol>
* [deleteRegexMatchSet](#deleteregexmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexMatchSet</a>. You can't delete a <code>RegexMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <code>RegexMatchTuples</code> objects (any filters).</p> <p>If you just want to remove a <code>RegexMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>RegexMatchSet</code> to remove filters, if any. For more information, see <a>UpdateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteRegexMatchSet</code> request.</p> </li> </ol>
* [deleteRegexPatternSet](#deleteregexpatternset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexPatternSet</a>. You can't delete a <code>RegexPatternSet</code> if it's still used in any <code>RegexMatchSet</code> or if the <code>RegexPatternSet</code> is not empty. </p>
* [deleteRule](#deleterule) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>Rule</a>. You can't delete a <code>Rule</code> if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRule</code> request.</p> </li> </ol>
* [deleteRuleGroup](#deleterulegroup) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code> objects or if it still includes any rules.</p> <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRuleGroup</code> request.</p> </li> <li> <p>Submit a <code>DeleteRuleGroup</code> request.</p> </li> </ol>
* [deleteSizeConstraintSet](#deletesizeconstraintset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>SizeConstraint</a> objects (any filters).</p> <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p> </li> </ol>
* [deleteSqlInjectionMatchSet](#deletesqlinjectionmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can't delete a <code>SqlInjectionMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p> <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> </ol>
* [deleteWebACL](#deletewebacl) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>WebACL</a>. You can't delete a <code>WebACL</code> if it still contains any <code>Rules</code>.</p> <p>To delete a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>WebACL</code> to remove <code>Rules</code>, if any. For more information, see <a>UpdateWebACL</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteWebACL</code> request.</p> </li> <li> <p>Submit a <code>DeleteWebACL</code> request.</p> </li> </ol>
* [deleteXssMatchSet](#deletexssmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>XssMatchSet</a>. You can't delete an <code>XssMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p> <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see <a>UpdateXssMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteXssMatchSet</code> request.</p> </li> </ol>
* [disassociateWebACL](#disassociatewebacl) - <note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Removes a web ACL from the specified resource, either an application load balancer or Amazon API Gateway stage.</p>
* [getByteMatchSet](#getbytematchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>
* [getChangeToken](#getchangetoken) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p> <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second <code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p> <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>, which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the status of your change token.</p>
* [getChangeTokenStatus](#getchangetokenstatus) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is one of the following values:</p> <ul> <li> <p> <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet in a call to create, update, or delete an AWS WAF object.</p> </li> <li> <p> <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p> </li> <li> <p> <code>INSYNC</code>: Propagation is complete.</p> </li> </ul>
* [getGeoMatchSet](#getgeomatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>
* [getIPSet](#getipset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>
* [getLoggingConfiguration](#getloggingconfiguration) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
* [getPermissionPolicy](#getpermissionpolicy) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the IAM policy attached to the RuleGroup.</p>
* [getRateBasedRule](#getratebasedrule) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RateBasedRule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRateBasedRule</code> request.</p>
* [getRateBasedRuleManagedKeys](#getratebasedrulemanagedkeys) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>
* [getRegexMatchSet](#getregexmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>
* [getRegexPatternSet](#getregexpatternset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexPatternSet</a> specified by <code>RegexPatternSetId</code>.</p>
* [getRule](#getrule) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>
* [getRuleGroup](#getrulegroup) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RuleGroup</a> that is specified by the <code>RuleGroupId</code> that you included in the <code>GetRuleGroup</code> request.</p> <p>To view the rules in a rule group, use <a>ListActivatedRulesInRuleGroup</a>.</p>
* [getSampledRequests](#getsampledrequests) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
* [getSizeConstraintSet](#getsizeconstraintset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>
* [getSqlInjectionMatchSet](#getsqlinjectionmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>
* [getWebACL](#getwebacl) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>
* [getWebACLForResource](#getwebaclforresource) - <note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the web ACL for the specified resource, either an application load balancer or Amazon API Gateway stage.</p>
* [getXssMatchSet](#getxssmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>
* [listActivatedRulesInRuleGroup](#listactivatedrulesinrulegroup) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ActivatedRule</a> objects.</p>
* [listByteMatchSets](#listbytematchsets) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>
* [listGeoMatchSets](#listgeomatchsets) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>
* [listIPSets](#listipsets) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>
* [listLoggingConfigurations](#listloggingconfigurations) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>LoggingConfiguration</a> objects.</p>
* [listRateBasedRules](#listratebasedrules) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>
* [listRegexMatchSets](#listregexmatchsets) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>
* [listRegexPatternSets](#listregexpatternsets) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexPatternSetSummary</a> objects.</p>
* [listResourcesForWebACL](#listresourcesforwebacl) - <note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of resources associated with the specified web ACL.</p>
* [listRuleGroups](#listrulegroups) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects.</p>
* [listRules](#listrules) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>
* [listSizeConstraintSets](#listsizeconstraintsets) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>
* [listSqlInjectionMatchSets](#listsqlinjectionmatchsets) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>
* [listSubscribedRuleGroups](#listsubscribedrulegroups) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>
* [listTagsForResource](#listtagsforresource) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Retrieves the tags associated with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>
* [listWebACLs](#listwebacls) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>
* [listXssMatchSets](#listxssmatchsets) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>XssMatchSet</a> objects.</p>
* [putLoggingConfiguration](#putloggingconfiguration) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p> <p>You can access information about all traffic that AWS WAF inspects using the following steps:</p> <ol> <li> <p>Create an Amazon Kinesis Data Firehose. </p> <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p> <note> <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p> </note> </li> <li> <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
* [putPermissionPolicy](#putpermissionpolicy) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p> <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p> </li> <li> <p>The policy cannot include a <code>Resource</code> parameter.</p> </li> <li> <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the RuleGroup.</p> </li> <li> <p>Your policy must be composed using IAM Policy version 2012-10-17.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>. </p> <p>An example of a valid policy parameter is shown in the Examples section below.</p>
* [tagResource](#tagresource) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can use this action to tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>
* [untagResource](#untagresource) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p/>
* [updateByteMatchSet](#updatebytematchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p> </li> <li> <p>Where to look, such as at the beginning or the end of a query string.</p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateGeoMatchSet](#updategeomatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p> </li> <li> <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p> </li> </ul> <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateGeoMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateIPSet](#updateipset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>IPSetDescriptor</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p> </li> <li> <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or <code>192.0.2.44/32</code> (for the individual IP address <code>192.0.2.44</code>). </p> </li> </ul> <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>IPv6 addresses can be represented using any of the following formats:</p> <ul> <li> <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p> </li> <li> <p>1111:0:0:0:0:0:0:0111/128</p> </li> <li> <p>1111::0111/128</p> </li> <li> <p>1111::111/128</p> </li> </ul> <p>You use an <code>IPSet</code> to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you're receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that specifies those IP addresses, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateIPSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one.</p> <p>You can insert a maximum of 1000 addresses in a single request.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateRateBasedRule](#updateratebasedrule) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the <code>RateLimit</code> in the rule. </p> <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to block or count. The <code>RateLimit</code> specifies the number of requests every five minutes that triggers the rule.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>
* [updateRegexMatchSet](#updateregexmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateRegexPatternSet](#updateregexpatternset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the <code>RegexPatternString</code>.</p> </li> <li> <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p> </li> </ul> <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p> <ul> <li> <p>BadBot</p> </li> <li> <p>BadB0t</p> </li> <li> <p>B@dBot</p> </li> <li> <p>B@dB0t</p> </li> </ul> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateRule](#updaterule) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a <code>Rule</code>: </p> <ul> <li> <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code> </p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>. For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code> <i>and</i> the request must originate from the IP address 192.0.2.44.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateRuleGroup](#updaterulegroup) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p> <p>You can only insert <code>REGULAR</code> rules into a rule group.</p> <p>You can have a maximum of ten rules per rule group.</p> <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRuleGroup</a> request.</p> </li> <li> <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateSizeConstraintSet](#updatesizeconstraintset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the <code>User-Agent</code> header.</p> </li> <li> <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length. Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes of your request to AWS WAF.</p> <p>You can only specify a single type of TextTransformation.</p> </li> <li> <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as equals, greater than, less than, and so on.</p> </li> <li> <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p> </li> </ul> <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the <code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateSqlInjectionMatchSet](#updatesqlinjectionmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SqlInjectionMatchTuple</a> objects (filters) in a <a>SqlInjectionMatchSet</a>. For each <code>SqlInjectionMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change a <code>SqlInjectionMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>SqlInjectionMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a <code>SqlInjectionMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateSqlInjectionMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateWebACL](#updatewebacl) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p> <ul> <li> <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>. AWS WAF performs the default action if a request doesn't match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p> </li> <li> <p>The <code>Rules</code> that you want to add or delete. If you want to replace one <code>Rule</code> with another, you delete the existing <code>Rule</code> and add the new one.</p> </li> <li> <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the <code>Rule</code>.</p> </li> <li> <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a <code>WebACL</code>. If you add more than one <code>Rule</code> to a <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code> in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has the lowest value for <code>Priority</code> is evaluated first.) When a web request matches all the predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining <code>Rules</code> in the <code>WebACL</code>, if any. </p> </li> </ul> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution. </p> <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group as your <code>ActivatedRule</code> , you can exclude specific rules from that rule group.</p> <p>If you already have a rule group associated with a web ACL and want to submit an <code>UpdateWebACL</code> request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see <a>ActivatedRule$ExcludedRules</a> . </p> </li> </ol> <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. </p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
* [updateXssMatchSet](#updatexssmatchset) - <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>. For each <code>XssMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change an <code>XssMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an <code>XssMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateXssMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

## associateWebACL

<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a web ACL with a resource, either an application load balancer or Amazon API Gateway stage.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateWebACLRequest;
import org.openapis.openapi.models.operations.AssociateWebACLResponse;
import org.openapis.openapi.models.operations.AssociateWebACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateWebACLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateWebACLRequest req = new AssociateWebACLRequest(                new AssociateWebACLRequest("suscipit", "iure");, AssociateWebACLXAmzTargetEnum.AWSWAF_REGIONAL20161128_ASSOCIATE_WEB_ACL) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateWebACLResponse res = sdk.sdk.associateWebACL(req);

            if (res.associateWebACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createByteMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateByteMatchSetRequest;
import org.openapis.openapi.models.operations.CreateByteMatchSetResponse;
import org.openapis.openapi.models.operations.CreateByteMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateByteMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateByteMatchSetRequest req = new CreateByteMatchSetRequest(                new CreateByteMatchSetRequest("placeat", "voluptatum");, CreateByteMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_BYTE_MATCH_SET) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            CreateByteMatchSetResponse res = sdk.sdk.createByteMatchSet(req);

            if (res.createByteMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGeoMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGeoMatchSetRequest;
import org.openapis.openapi.models.operations.CreateGeoMatchSetResponse;
import org.openapis.openapi.models.operations.CreateGeoMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGeoMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGeoMatchSetRequest req = new CreateGeoMatchSetRequest(                new CreateGeoMatchSetRequest("deserunt", "perferendis");, CreateGeoMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_GEO_MATCH_SET) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            CreateGeoMatchSetResponse res = sdk.sdk.createGeoMatchSet(req);

            if (res.createGeoMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIPSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>IPSet</a>, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that contains those IP addresses and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateIPSet</code> request.</p> </li> <li> <p>Submit a <code>CreateIPSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIPSetRequest;
import org.openapis.openapi.models.operations.CreateIPSetResponse;
import org.openapis.openapi.models.operations.CreateIPSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateIPSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIPSetRequest req = new CreateIPSetRequest(                new CreateIPSetRequest("molestiae", "quod");, CreateIPSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_IP_SET) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            CreateIPSetResponse res = sdk.sdk.createIPSet(req);

            if (res.createIPSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRateBasedRule

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The <code>RateBasedRule</code> also contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to count or block if these requests exceed the <code>RateLimit</code>.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not only must exceed the <code>RateLimit</code>, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p> <p>To create and configure a <code>RateBasedRule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the rule. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRateBasedRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates that you want to include in the rule.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRateBasedRuleRequest;
import org.openapis.openapi.models.operations.CreateRateBasedRuleResponse;
import org.openapis.openapi.models.operations.CreateRateBasedRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRateBasedRuleRequest;
import org.openapis.openapi.models.shared.RateKeyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRateBasedRuleRequest req = new CreateRateBasedRuleRequest(                new CreateRateBasedRuleRequest("occaecati", "fugit", "deleniti", RateKeyEnum.IP, 944669L) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("commodi", "molestiae") {{
                                        key = "totam";
                                        value = "beatae";
                                    }}),
                                    add(new Tag("impedit", "cum") {{
                                        key = "modi";
                                        value = "qui";
                                    }}),
                                    add(new Tag("excepturi", "aspernatur") {{
                                        key = "esse";
                                        value = "ipsum";
                                    }}),
                                    add(new Tag("natus", "sed") {{
                                        key = "perferendis";
                                        value = "ad";
                                    }}),
                                }};
                            }};, CreateRateBasedRuleXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_RATE_BASED_RULE) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
            }};            

            CreateRateBasedRuleResponse res = sdk.sdk.createRateBasedRule(req);

            if (res.createRateBasedRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRegexMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRegexMatchSetRequest;
import org.openapis.openapi.models.operations.CreateRegexMatchSetResponse;
import org.openapis.openapi.models.operations.CreateRegexMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRegexMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRegexMatchSetRequest req = new CreateRegexMatchSetRequest(                new CreateRegexMatchSetRequest("corporis", "iste");, CreateRegexMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_REGEX_MATCH_SET) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            CreateRegexMatchSetResponse res = sdk.sdk.createRegexMatchSet(req);

            if (res.createRegexMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRegexPatternSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRegexPatternSetRequest;
import org.openapis.openapi.models.operations.CreateRegexPatternSetResponse;
import org.openapis.openapi.models.operations.CreateRegexPatternSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRegexPatternSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRegexPatternSetRequest req = new CreateRegexPatternSetRequest(                new CreateRegexPatternSetRequest("laborum", "dolores");, CreateRegexPatternSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_REGEX_PATTERN_SET) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            CreateRegexPatternSetResponse res = sdk.sdk.createRegexPatternSet(req);

            if (res.createRegexPatternSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRule

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a <code>Rule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRuleRequest;
import org.openapis.openapi.models.operations.CreateRuleResponse;
import org.openapis.openapi.models.operations.CreateRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRuleRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleRequest req = new CreateRuleRequest(                new CreateRuleRequest("excepturi", "accusantium", "iure") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("architecto", "mollitia") {{
                                        key = "doloribus";
                                        value = "sapiente";
                                    }}),
                                    add(new Tag("consequuntur", "repellat") {{
                                        key = "dolorem";
                                        value = "culpa";
                                    }}),
                                    add(new Tag("numquam", "commodi") {{
                                        key = "mollitia";
                                        value = "occaecati";
                                    }}),
                                }};
                            }};, CreateRuleXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_RULE) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            CreateRuleResponse res = sdk.sdk.createRule(req);

            if (res.createRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRuleGroup

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRuleGroupRequest;
import org.openapis.openapi.models.operations.CreateRuleGroupResponse;
import org.openapis.openapi.models.operations.CreateRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRuleGroupRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleGroupRequest req = new CreateRuleGroupRequest(                new CreateRuleGroupRequest("animi", "enim", "odit") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ipsam", "id") {{
                                        key = "sequi";
                                        value = "tenetur";
                                    }}),
                                    add(new Tag("quasi", "error") {{
                                        key = "possimus";
                                        value = "aut";
                                    }}),
                                    add(new Tag("quasi", "reiciendis") {{
                                        key = "temporibus";
                                        value = "laborum";
                                    }}),
                                    add(new Tag("nihil", "praesentium") {{
                                        key = "voluptatibus";
                                        value = "vero";
                                    }}),
                                }};
                            }};, CreateRuleGroupXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_RULE_GROUP) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            CreateRuleGroupResponse res = sdk.sdk.createRuleGroup(req);

            if (res.createRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSizeConstraintSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string. For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSizeConstraintSetRequest;
import org.openapis.openapi.models.operations.CreateSizeConstraintSetResponse;
import org.openapis.openapi.models.operations.CreateSizeConstraintSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSizeConstraintSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSizeConstraintSetRequest req = new CreateSizeConstraintSetRequest(                new CreateSizeConstraintSetRequest("ut", "maiores");, CreateSizeConstraintSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_SIZE_CONSTRAINT_SET) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            CreateSizeConstraintSetResponse res = sdk.sdk.createSizeConstraintSet(req);

            if (res.createSizeConstraintSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSqlInjectionMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>SqlInjectionMatchSet</a>, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateSqlInjectionMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSqlInjectionMatchSetRequest;
import org.openapis.openapi.models.operations.CreateSqlInjectionMatchSetResponse;
import org.openapis.openapi.models.operations.CreateSqlInjectionMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSqlInjectionMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSqlInjectionMatchSetRequest req = new CreateSqlInjectionMatchSetRequest(                new CreateSqlInjectionMatchSetRequest("commodi", "repudiandae");, CreateSqlInjectionMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_SQL_INJECTION_MATCH_SET) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            CreateSqlInjectionMatchSetResponse res = sdk.sdk.createSqlInjectionMatchSet(req);

            if (res.createSqlInjectionMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebACL

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p> <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateWebACL</code> request.</p> </li> <li> <p>Submit a <code>CreateWebACL</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p> </li> </ol> <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebACLRequest;
import org.openapis.openapi.models.operations.CreateWebACLResponse;
import org.openapis.openapi.models.operations.CreateWebACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateWebACLRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.WafAction;
import org.openapis.openapi.models.shared.WafActionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWebACLRequest req = new CreateWebACLRequest(                new CreateWebACLRequest("rem",                 new WafAction(WafActionTypeEnum.COUNT);, "quasi", "repudiandae") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("incidunt", "enim") {{
                                        key = "veritatis";
                                        value = "itaque";
                                    }}),
                                    add(new Tag("quibusdam", "explicabo") {{
                                        key = "consequatur";
                                        value = "est";
                                    }}),
                                    add(new Tag("quibusdam", "labore") {{
                                        key = "deserunt";
                                        value = "distinctio";
                                    }}),
                                }};
                            }};, CreateWebACLXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_WEB_ACL) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
            }};            

            CreateWebACLResponse res = sdk.sdk.createWebACL(req);

            if (res.createWebACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebACLMigrationStack

<p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p> <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebACLMigrationStackRequest;
import org.openapis.openapi.models.operations.CreateWebACLMigrationStackResponse;
import org.openapis.openapi.models.operations.CreateWebACLMigrationStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateWebACLMigrationStackRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWebACLMigrationStackRequest req = new CreateWebACLMigrationStackRequest(                new CreateWebACLMigrationStackRequest(false, "ipsam", "alias");, CreateWebACLMigrationStackXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_WEB_ACL_MIGRATION_STACK) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
            }};            

            CreateWebACLMigrationStackResponse res = sdk.sdk.createWebACLMigrationStack(req);

            if (res.createWebACLMigrationStackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createXssMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateXssMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateXssMatchSetRequest;
import org.openapis.openapi.models.operations.CreateXssMatchSetResponse;
import org.openapis.openapi.models.operations.CreateXssMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateXssMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateXssMatchSetRequest req = new CreateXssMatchSetRequest(                new CreateXssMatchSetRequest("eum", "non");, CreateXssMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_CREATE_XSS_MATCH_SET) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sint";
                xAmzCredential = "aliquid";
                xAmzDate = "provident";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "officia";
            }};            

            CreateXssMatchSetResponse res = sdk.sdk.createXssMatchSet(req);

            if (res.createXssMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteByteMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>ByteMatchSet</a>. You can't delete a <code>ByteMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p> <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteByteMatchSet</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteByteMatchSetRequest;
import org.openapis.openapi.models.operations.DeleteByteMatchSetResponse;
import org.openapis.openapi.models.operations.DeleteByteMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteByteMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteByteMatchSetRequest req = new DeleteByteMatchSetRequest(                new DeleteByteMatchSetRequest("debitis", "a");, DeleteByteMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_BYTE_MATCH_SET) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "in";
                xAmzCredential = "in";
                xAmzDate = "illum";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "dicta";
            }};            

            DeleteByteMatchSetResponse res = sdk.sdk.deleteByteMatchSet(req);

            if (res.deleteByteMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGeoMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any countries.</p> <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteGeoMatchSet</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGeoMatchSetRequest;
import org.openapis.openapi.models.operations.DeleteGeoMatchSetResponse;
import org.openapis.openapi.models.operations.DeleteGeoMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGeoMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGeoMatchSetRequest req = new DeleteGeoMatchSetRequest(                new DeleteGeoMatchSetRequest("cumque", "facere");, DeleteGeoMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_GEO_MATCH_SET) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            DeleteGeoMatchSetResponse res = sdk.sdk.deleteGeoMatchSet(req);

            if (res.deleteGeoMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIPSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>IPSet</a>. You can't delete an <code>IPSet</code> if it's still used in any <code>Rules</code> or if it still includes any IP addresses.</p> <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteIPSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteIPSet</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIPSetRequest;
import org.openapis.openapi.models.operations.DeleteIPSetResponse;
import org.openapis.openapi.models.operations.DeleteIPSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteIPSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIPSetRequest req = new DeleteIPSetRequest(                new DeleteIPSetRequest("delectus", "quidem");, DeleteIPSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_IP_SET) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nam";
                xAmzCredential = "id";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteIPSetResponse res = sdk.sdk.deleteIPSet(req);

            if (res.deleteIPSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLoggingConfiguration

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteLoggingConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteLoggingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLoggingConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLoggingConfigurationRequest req = new DeleteLoggingConfigurationRequest(                new DeleteLoggingConfigurationRequest("nisi");, DeleteLoggingConfigurationXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_LOGGING_CONFIGURATION) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            DeleteLoggingConfigurationResponse res = sdk.sdk.deleteLoggingConfiguration(req);

            if (res.deleteLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePermissionPolicy

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an IAM policy from the specified RuleGroup.</p> <p>The user making the request must be the owner of the RuleGroup.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionPolicyRequest;
import org.openapis.openapi.models.operations.DeletePermissionPolicyResponse;
import org.openapis.openapi.models.operations.DeletePermissionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePermissionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePermissionPolicyRequest req = new DeletePermissionPolicyRequest(                new DeletePermissionPolicyRequest("id");, DeletePermissionPolicyXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_PERMISSION_POLICY) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "suscipit";
                xAmzDate = "natus";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "vero";
            }};            

            DeletePermissionPolicyResponse res = sdk.sdk.deletePermissionPolicy(req);

            if (res.deletePermissionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRateBasedRule

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more information, see <a>UpdateRateBasedRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRateBasedRule</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRateBasedRuleRequest;
import org.openapis.openapi.models.operations.DeleteRateBasedRuleResponse;
import org.openapis.openapi.models.operations.DeleteRateBasedRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRateBasedRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRateBasedRuleRequest req = new DeleteRateBasedRuleRequest(                new DeleteRateBasedRuleRequest("architecto", "magnam");, DeleteRateBasedRuleXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_RATE_BASED_RULE) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "ullam";
                xAmzDate = "provident";
                xAmzSecurityToken = "quos";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusantium";
            }};            

            DeleteRateBasedRuleResponse res = sdk.sdk.deleteRateBasedRule(req);

            if (res.deleteRateBasedRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRegexMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexMatchSet</a>. You can't delete a <code>RegexMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <code>RegexMatchTuples</code> objects (any filters).</p> <p>If you just want to remove a <code>RegexMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>RegexMatchSet</code> to remove filters, if any. For more information, see <a>UpdateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteRegexMatchSet</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRegexMatchSetRequest;
import org.openapis.openapi.models.operations.DeleteRegexMatchSetResponse;
import org.openapis.openapi.models.operations.DeleteRegexMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRegexMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRegexMatchSetRequest req = new DeleteRegexMatchSetRequest(                new DeleteRegexMatchSetRequest("reiciendis", "mollitia");, DeleteRegexMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_REGEX_MATCH_SET) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            DeleteRegexMatchSetResponse res = sdk.sdk.deleteRegexMatchSet(req);

            if (res.deleteRegexMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRegexPatternSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexPatternSet</a>. You can't delete a <code>RegexPatternSet</code> if it's still used in any <code>RegexMatchSet</code> or if the <code>RegexPatternSet</code> is not empty. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRegexPatternSetRequest;
import org.openapis.openapi.models.operations.DeleteRegexPatternSetResponse;
import org.openapis.openapi.models.operations.DeleteRegexPatternSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRegexPatternSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRegexPatternSetRequest req = new DeleteRegexPatternSetRequest(                new DeleteRegexPatternSetRequest("doloribus", "debitis");, DeleteRegexPatternSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_REGEX_PATTERN_SET) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            DeleteRegexPatternSetResponse res = sdk.sdk.deleteRegexPatternSet(req);

            if (res.deleteRegexPatternSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRule

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>Rule</a>. You can't delete a <code>Rule</code> if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRule</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRuleRequest;
import org.openapis.openapi.models.operations.DeleteRuleResponse;
import org.openapis.openapi.models.operations.DeleteRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRuleRequest req = new DeleteRuleRequest(                new DeleteRuleRequest("ullam", "expedita");, DeleteRuleXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_RULE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            DeleteRuleResponse res = sdk.sdk.deleteRule(req);

            if (res.deleteRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRuleGroup

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code> objects or if it still includes any rules.</p> <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRuleGroup</code> request.</p> </li> <li> <p>Submit a <code>DeleteRuleGroup</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRuleGroupRequest;
import org.openapis.openapi.models.operations.DeleteRuleGroupResponse;
import org.openapis.openapi.models.operations.DeleteRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRuleGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRuleGroupRequest req = new DeleteRuleGroupRequest(                new DeleteRuleGroupRequest("praesentium", "natus");, DeleteRuleGroupXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_RULE_GROUP) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            DeleteRuleGroupResponse res = sdk.sdk.deleteRuleGroup(req);

            if (res.deleteRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSizeConstraintSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>SizeConstraint</a> objects (any filters).</p> <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSizeConstraintSetRequest;
import org.openapis.openapi.models.operations.DeleteSizeConstraintSetResponse;
import org.openapis.openapi.models.operations.DeleteSizeConstraintSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSizeConstraintSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSizeConstraintSetRequest req = new DeleteSizeConstraintSetRequest(                new DeleteSizeConstraintSetRequest("odit", "ea");, DeleteSizeConstraintSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_SIZE_CONSTRAINT_SET) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            DeleteSizeConstraintSetResponse res = sdk.sdk.deleteSizeConstraintSet(req);

            if (res.deleteSizeConstraintSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSqlInjectionMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can't delete a <code>SqlInjectionMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p> <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSqlInjectionMatchSetRequest;
import org.openapis.openapi.models.operations.DeleteSqlInjectionMatchSetResponse;
import org.openapis.openapi.models.operations.DeleteSqlInjectionMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSqlInjectionMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSqlInjectionMatchSetRequest req = new DeleteSqlInjectionMatchSetRequest(                new DeleteSqlInjectionMatchSetRequest("eaque", "pariatur");, DeleteSqlInjectionMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_SQL_INJECTION_MATCH_SET) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            DeleteSqlInjectionMatchSetResponse res = sdk.sdk.deleteSqlInjectionMatchSet(req);

            if (res.deleteSqlInjectionMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebACL

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>WebACL</a>. You can't delete a <code>WebACL</code> if it still contains any <code>Rules</code>.</p> <p>To delete a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>WebACL</code> to remove <code>Rules</code>, if any. For more information, see <a>UpdateWebACL</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteWebACL</code> request.</p> </li> <li> <p>Submit a <code>DeleteWebACL</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebACLRequest;
import org.openapis.openapi.models.operations.DeleteWebACLResponse;
import org.openapis.openapi.models.operations.DeleteWebACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWebACLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWebACLRequest req = new DeleteWebACLRequest(                new DeleteWebACLRequest("hic", "libero");, DeleteWebACLXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_WEB_ACL) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
            }};            

            DeleteWebACLResponse res = sdk.sdk.deleteWebACL(req);

            if (res.deleteWebACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteXssMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>XssMatchSet</a>. You can't delete an <code>XssMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p> <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see <a>UpdateXssMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteXssMatchSet</code> request.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteXssMatchSetRequest;
import org.openapis.openapi.models.operations.DeleteXssMatchSetResponse;
import org.openapis.openapi.models.operations.DeleteXssMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteXssMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteXssMatchSetRequest req = new DeleteXssMatchSetRequest(                new DeleteXssMatchSetRequest("eos", "perferendis");, DeleteXssMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_DELETE_XSS_MATCH_SET) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quam";
                xAmzDate = "dolor";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteXssMatchSetResponse res = sdk.sdk.deleteXssMatchSet(req);

            if (res.deleteXssMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateWebACL

<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Removes a web ACL from the specified resource, either an application load balancer or Amazon API Gateway stage.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateWebACLRequest;
import org.openapis.openapi.models.operations.DisassociateWebACLResponse;
import org.openapis.openapi.models.operations.DisassociateWebACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateWebACLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateWebACLRequest req = new DisassociateWebACLRequest(                new DisassociateWebACLRequest("omnis");, DisassociateWebACLXAmzTargetEnum.AWSWAF_REGIONAL20161128_DISASSOCIATE_WEB_ACL) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "voluptatem";
                xAmzDate = "porro";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "error";
            }};            

            DisassociateWebACLResponse res = sdk.sdk.disassociateWebACL(req);

            if (res.disassociateWebACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getByteMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetByteMatchSetRequest;
import org.openapis.openapi.models.operations.GetByteMatchSetResponse;
import org.openapis.openapi.models.operations.GetByteMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetByteMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetByteMatchSetRequest req = new GetByteMatchSetRequest(                new GetByteMatchSetRequest("occaecati");, GetByteMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_BYTE_MATCH_SET) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetByteMatchSetResponse res = sdk.sdk.getByteMatchSet(req);

            if (res.getByteMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangeToken

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p> <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second <code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p> <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>, which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the status of your change token.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangeTokenRequest;
import org.openapis.openapi.models.operations.GetChangeTokenResponse;
import org.openapis.openapi.models.operations.GetChangeTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetChangeTokenRequest req = new GetChangeTokenRequest(                new java.util.HashMap<String, Object>() {{
                                put("provident", "nobis");
                                put("libero", "delectus");
                                put("quaerat", "quos");
                                put("aliquid", "dolorem");
                            }}, GetChangeTokenXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_CHANGE_TOKEN) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "qui";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "cum";
            }};            

            GetChangeTokenResponse res = sdk.sdk.getChangeToken(req);

            if (res.getChangeTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangeTokenStatus

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is one of the following values:</p> <ul> <li> <p> <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet in a call to create, update, or delete an AWS WAF object.</p> </li> <li> <p> <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p> </li> <li> <p> <code>INSYNC</code>: Propagation is complete.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangeTokenStatusRequest;
import org.openapis.openapi.models.operations.GetChangeTokenStatusResponse;
import org.openapis.openapi.models.operations.GetChangeTokenStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetChangeTokenStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetChangeTokenStatusRequest req = new GetChangeTokenStatusRequest(                new GetChangeTokenStatusRequest("dignissimos");, GetChangeTokenStatusXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_CHANGE_TOKEN_STATUS) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "dolorum";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetChangeTokenStatusResponse res = sdk.sdk.getChangeTokenStatus(req);

            if (res.getChangeTokenStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeoMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeoMatchSetRequest;
import org.openapis.openapi.models.operations.GetGeoMatchSetResponse;
import org.openapis.openapi.models.operations.GetGeoMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetGeoMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGeoMatchSetRequest req = new GetGeoMatchSetRequest(                new GetGeoMatchSetRequest("odio");, GetGeoMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_GEO_MATCH_SET) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            GetGeoMatchSetResponse res = sdk.sdk.getGeoMatchSet(req);

            if (res.getGeoMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIPSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIPSetRequest;
import org.openapis.openapi.models.operations.GetIPSetResponse;
import org.openapis.openapi.models.operations.GetIPSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetIPSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIPSetRequest req = new GetIPSetRequest(                new GetIPSetRequest("sit");, GetIPSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_IP_SET) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetIPSetResponse res = sdk.sdk.getIPSet(req);

            if (res.getIPSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoggingConfiguration

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.GetLoggingConfigurationResponse;
import org.openapis.openapi.models.operations.GetLoggingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLoggingConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoggingConfigurationRequest req = new GetLoggingConfigurationRequest(                new GetLoggingConfigurationRequest("omnis");, GetLoggingConfigurationXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_LOGGING_CONFIGURATION) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "asperiores";
                xAmzDate = "nihil";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "id";
            }};            

            GetLoggingConfigurationResponse res = sdk.sdk.getLoggingConfiguration(req);

            if (res.getLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissionPolicy

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the IAM policy attached to the RuleGroup.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionPolicyRequest;
import org.openapis.openapi.models.operations.GetPermissionPolicyResponse;
import org.openapis.openapi.models.operations.GetPermissionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPermissionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPermissionPolicyRequest req = new GetPermissionPolicyRequest(                new GetPermissionPolicyRequest("eius");, GetPermissionPolicyXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_PERMISSION_POLICY) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "amet";
                xAmzDate = "optio";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "saepe";
            }};            

            GetPermissionPolicyResponse res = sdk.sdk.getPermissionPolicy(req);

            if (res.getPermissionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRateBasedRule

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RateBasedRule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRateBasedRule</code> request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRateBasedRuleRequest;
import org.openapis.openapi.models.operations.GetRateBasedRuleResponse;
import org.openapis.openapi.models.operations.GetRateBasedRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRateBasedRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRateBasedRuleRequest req = new GetRateBasedRuleRequest(                new GetRateBasedRuleRequest("deserunt");, GetRateBasedRuleXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_RATE_BASED_RULE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "minima";
                xAmzCredential = "repellendus";
                xAmzDate = "totam";
                xAmzSecurityToken = "similique";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "at";
            }};            

            GetRateBasedRuleResponse res = sdk.sdk.getRateBasedRule(req);

            if (res.getRateBasedRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRateBasedRuleManagedKeys

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRateBasedRuleManagedKeysRequest;
import org.openapis.openapi.models.operations.GetRateBasedRuleManagedKeysResponse;
import org.openapis.openapi.models.operations.GetRateBasedRuleManagedKeysXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRateBasedRuleManagedKeysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRateBasedRuleManagedKeysRequest req = new GetRateBasedRuleManagedKeysRequest(                new GetRateBasedRuleManagedKeysRequest("tempora") {{
                                nextMarker = "vel";
                            }};, GetRateBasedRuleManagedKeysXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_RATE_BASED_RULE_MANAGED_KEYS) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "qui";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "a";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "harum";
            }};            

            GetRateBasedRuleManagedKeysResponse res = sdk.sdk.getRateBasedRuleManagedKeys(req);

            if (res.getRateBasedRuleManagedKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegexMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegexMatchSetRequest;
import org.openapis.openapi.models.operations.GetRegexMatchSetResponse;
import org.openapis.openapi.models.operations.GetRegexMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRegexMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRegexMatchSetRequest req = new GetRegexMatchSetRequest(                new GetRegexMatchSetRequest("ipsum");, GetRegexMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_REGEX_MATCH_SET) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "amet";
                xAmzDate = "tempore";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "enim";
            }};            

            GetRegexMatchSetResponse res = sdk.sdk.getRegexMatchSet(req);

            if (res.getRegexMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegexPatternSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexPatternSet</a> specified by <code>RegexPatternSetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegexPatternSetRequest;
import org.openapis.openapi.models.operations.GetRegexPatternSetResponse;
import org.openapis.openapi.models.operations.GetRegexPatternSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRegexPatternSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRegexPatternSetRequest req = new GetRegexPatternSetRequest(                new GetRegexPatternSetRequest("sapiente");, GetRegexPatternSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_REGEX_PATTERN_SET) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
            }};            

            GetRegexPatternSetResponse res = sdk.sdk.getRegexPatternSet(req);

            if (res.getRegexPatternSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRule

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRuleRequest;
import org.openapis.openapi.models.operations.GetRuleResponse;
import org.openapis.openapi.models.operations.GetRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRuleRequest req = new GetRuleRequest(                new GetRuleRequest("voluptas");, GetRuleXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_RULE) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "quam";
                xAmzCredential = "ipsum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "maxime";
            }};            

            GetRuleResponse res = sdk.sdk.getRule(req);

            if (res.getRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRuleGroup

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RuleGroup</a> that is specified by the <code>RuleGroupId</code> that you included in the <code>GetRuleGroup</code> request.</p> <p>To view the rules in a rule group, use <a>ListActivatedRulesInRuleGroup</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRuleGroupRequest;
import org.openapis.openapi.models.operations.GetRuleGroupResponse;
import org.openapis.openapi.models.operations.GetRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRuleGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRuleGroupRequest req = new GetRuleGroupRequest(                new GetRuleGroupRequest("soluta");, GetRuleGroupXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_RULE_GROUP) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            GetRuleGroupResponse res = sdk.sdk.getRuleGroup(req);

            if (res.getRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSampledRequests

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSampledRequestsRequest;
import org.openapis.openapi.models.operations.GetSampledRequestsResponse;
import org.openapis.openapi.models.operations.GetSampledRequestsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSampledRequestsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeWindow;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSampledRequestsRequest req = new GetSampledRequestsRequest(                new GetSampledRequestsRequest(396060L, "quam",                 new TimeWindow(OffsetDateTime.parse("2021-04-27T11:41:31.258Z"), OffsetDateTime.parse("2022-10-18T05:22:32.548Z"));, "fugit");, GetSampledRequestsXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_SAMPLED_REQUESTS) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "odio";
                xAmzCredential = "sunt";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "voluptatem";
            }};            

            GetSampledRequestsResponse res = sdk.sdk.getSampledRequests(req);

            if (res.getSampledRequestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSizeConstraintSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSizeConstraintSetRequest;
import org.openapis.openapi.models.operations.GetSizeConstraintSetResponse;
import org.openapis.openapi.models.operations.GetSizeConstraintSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSizeConstraintSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSizeConstraintSetRequest req = new GetSizeConstraintSetRequest(                new GetSizeConstraintSetRequest("soluta");, GetSizeConstraintSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_SIZE_CONSTRAINT_SET) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "et";
                xAmzCredential = "saepe";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quos";
            }};            

            GetSizeConstraintSetResponse res = sdk.sdk.getSizeConstraintSet(req);

            if (res.getSizeConstraintSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSqlInjectionMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSqlInjectionMatchSetRequest;
import org.openapis.openapi.models.operations.GetSqlInjectionMatchSetResponse;
import org.openapis.openapi.models.operations.GetSqlInjectionMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSqlInjectionMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSqlInjectionMatchSetRequest req = new GetSqlInjectionMatchSetRequest(                new GetSqlInjectionMatchSetRequest("cupiditate");, GetSqlInjectionMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_SQL_INJECTION_MATCH_SET) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "dolorem";
                xAmzDate = "dolore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetSqlInjectionMatchSetResponse res = sdk.sdk.getSqlInjectionMatchSet(req);

            if (res.getSqlInjectionMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebACL

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebACLRequest;
import org.openapis.openapi.models.operations.GetWebACLResponse;
import org.openapis.openapi.models.operations.GetWebACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetWebACLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWebACLRequest req = new GetWebACLRequest(                new GetWebACLRequest("quae");, GetWebACLXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_WEB_ACL) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
            }};            

            GetWebACLResponse res = sdk.sdk.getWebACL(req);

            if (res.getWebACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebACLForResource

<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the web ACL for the specified resource, either an application load balancer or Amazon API Gateway stage.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebACLForResourceRequest;
import org.openapis.openapi.models.operations.GetWebACLForResourceResponse;
import org.openapis.openapi.models.operations.GetWebACLForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetWebACLForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWebACLForResourceRequest req = new GetWebACLForResourceRequest(                new GetWebACLForResourceRequest("ut");, GetWebACLForResourceXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_WEB_ACL_FOR_RESOURCE) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "qui";
                xAmzDate = "quae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetWebACLForResourceResponse res = sdk.sdk.getWebACLForResource(req);

            if (res.getWebACLForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getXssMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetXssMatchSetRequest;
import org.openapis.openapi.models.operations.GetXssMatchSetResponse;
import org.openapis.openapi.models.operations.GetXssMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetXssMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetXssMatchSetRequest req = new GetXssMatchSetRequest(                new GetXssMatchSetRequest("quisquam");, GetXssMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_GET_XSS_MATCH_SET) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
            }};            

            GetXssMatchSetResponse res = sdk.sdk.getXssMatchSet(req);

            if (res.getXssMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listActivatedRulesInRuleGroup

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ActivatedRule</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListActivatedRulesInRuleGroupRequest;
import org.openapis.openapi.models.operations.ListActivatedRulesInRuleGroupResponse;
import org.openapis.openapi.models.operations.ListActivatedRulesInRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListActivatedRulesInRuleGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListActivatedRulesInRuleGroupRequest req = new ListActivatedRulesInRuleGroupRequest(                new ListActivatedRulesInRuleGroupRequest() {{
                                limit = 949319L;
                                nextMarker = "dignissimos";
                                ruleGroupId = "hic";
                            }};, ListActivatedRulesInRuleGroupXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_ACTIVATED_RULES_IN_RULE_GROUP) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quod";
                xAmzCredential = "odio";
                xAmzDate = "similique";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "ducimus";
            }};            

            ListActivatedRulesInRuleGroupResponse res = sdk.sdk.listActivatedRulesInRuleGroup(req);

            if (res.listActivatedRulesInRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listByteMatchSets

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListByteMatchSetsRequest;
import org.openapis.openapi.models.operations.ListByteMatchSetsResponse;
import org.openapis.openapi.models.operations.ListByteMatchSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListByteMatchSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListByteMatchSetsRequest req = new ListByteMatchSetsRequest(                new ListByteMatchSetsRequest() {{
                                limit = 844550L;
                                nextMarker = "illum";
                            }};, ListByteMatchSetsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_BYTE_MATCH_SETS) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "natus";
                xAmzCredential = "impedit";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nulla";
            }};            

            ListByteMatchSetsResponse res = sdk.sdk.listByteMatchSets(req);

            if (res.listByteMatchSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGeoMatchSets

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGeoMatchSetsRequest;
import org.openapis.openapi.models.operations.ListGeoMatchSetsResponse;
import org.openapis.openapi.models.operations.ListGeoMatchSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGeoMatchSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGeoMatchSetsRequest req = new ListGeoMatchSetsRequest(                new ListGeoMatchSetsRequest() {{
                                limit = 780427L;
                                nextMarker = "maiores";
                            }};, ListGeoMatchSetsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_GEO_MATCH_SETS) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
            }};            

            ListGeoMatchSetsResponse res = sdk.sdk.listGeoMatchSets(req);

            if (res.listGeoMatchSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIPSets

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIPSetsRequest;
import org.openapis.openapi.models.operations.ListIPSetsResponse;
import org.openapis.openapi.models.operations.ListIPSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListIPSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIPSetsRequest req = new ListIPSetsRequest(                new ListIPSetsRequest() {{
                                limit = 410492L;
                                nextMarker = "aspernatur";
                            }};, ListIPSetsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_IP_SETS) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "magnam";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ex";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "dicta";
            }};            

            ListIPSetsResponse res = sdk.sdk.listIPSets(req);

            if (res.listIPSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLoggingConfigurations

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>LoggingConfiguration</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLoggingConfigurationsRequest;
import org.openapis.openapi.models.operations.ListLoggingConfigurationsResponse;
import org.openapis.openapi.models.operations.ListLoggingConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLoggingConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLoggingConfigurationsRequest req = new ListLoggingConfigurationsRequest(                new ListLoggingConfigurationsRequest() {{
                                limit = 980700L;
                                nextMarker = "quasi";
                            }};, ListLoggingConfigurationsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_LOGGING_CONFIGURATIONS) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "excepturi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quisquam";
            }};            

            ListLoggingConfigurationsResponse res = sdk.sdk.listLoggingConfigurations(req);

            if (res.listLoggingConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRateBasedRules

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRateBasedRulesRequest;
import org.openapis.openapi.models.operations.ListRateBasedRulesResponse;
import org.openapis.openapi.models.operations.ListRateBasedRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRateBasedRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRateBasedRulesRequest req = new ListRateBasedRulesRequest(                new ListRateBasedRulesRequest() {{
                                limit = 411372L;
                                nextMarker = "impedit";
                            }};, ListRateBasedRulesXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_RATE_BASED_RULES) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            ListRateBasedRulesResponse res = sdk.sdk.listRateBasedRules(req);

            if (res.listRateBasedRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRegexMatchSets

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRegexMatchSetsRequest;
import org.openapis.openapi.models.operations.ListRegexMatchSetsResponse;
import org.openapis.openapi.models.operations.ListRegexMatchSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRegexMatchSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRegexMatchSetsRequest req = new ListRegexMatchSetsRequest(                new ListRegexMatchSetsRequest() {{
                                limit = 926213L;
                                nextMarker = "aspernatur";
                            }};, ListRegexMatchSetsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_REGEX_MATCH_SETS) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "a";
                xAmzDate = "libero";
                xAmzSecurityToken = "aut";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "deleniti";
            }};            

            ListRegexMatchSetsResponse res = sdk.sdk.listRegexMatchSets(req);

            if (res.listRegexMatchSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRegexPatternSets

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexPatternSetSummary</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRegexPatternSetsRequest;
import org.openapis.openapi.models.operations.ListRegexPatternSetsResponse;
import org.openapis.openapi.models.operations.ListRegexPatternSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRegexPatternSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRegexPatternSetsRequest req = new ListRegexPatternSetsRequest(                new ListRegexPatternSetsRequest() {{
                                limit = 304582L;
                                nextMarker = "fugit";
                            }};, ListRegexPatternSetsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_REGEX_PATTERN_SETS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "non";
                xAmzDate = "et";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "placeat";
            }};            

            ListRegexPatternSetsResponse res = sdk.sdk.listRegexPatternSets(req);

            if (res.listRegexPatternSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourcesForWebACL

<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of resources associated with the specified web ACL.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesForWebACLRequest;
import org.openapis.openapi.models.operations.ListResourcesForWebACLResponse;
import org.openapis.openapi.models.operations.ListResourcesForWebACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourcesForWebACLRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesForWebACLRequest req = new ListResourcesForWebACLRequest(                new ListResourcesForWebACLRequest("eum") {{
                                resourceType = ResourceTypeEnum.APPLICATION_LOAD_BALANCER;
                            }};, ListResourcesForWebACLXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_RESOURCES_FOR_WEB_ACL) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "assumenda";
                xAmzDate = "nulla";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "quasi";
            }};            

            ListResourcesForWebACLResponse res = sdk.sdk.listResourcesForWebACL(req);

            if (res.listResourcesForWebACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRuleGroups

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRuleGroupsRequest;
import org.openapis.openapi.models.operations.ListRuleGroupsResponse;
import org.openapis.openapi.models.operations.ListRuleGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRuleGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRuleGroupsRequest req = new ListRuleGroupsRequest(                new ListRuleGroupsRequest() {{
                                limit = 256139L;
                                nextMarker = "explicabo";
                            }};, ListRuleGroupsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_RULE_GROUPS) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "molestiae";
                xAmzDate = "magnam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "esse";
            }};            

            ListRuleGroupsResponse res = sdk.sdk.listRuleGroups(req);

            if (res.listRuleGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRules

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRulesRequest;
import org.openapis.openapi.models.operations.ListRulesResponse;
import org.openapis.openapi.models.operations.ListRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRulesRequest req = new ListRulesRequest(                new ListRulesRequest() {{
                                limit = 524593L;
                                nextMarker = "fuga";
                            }};, ListRulesXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_RULES) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "fugiat";
                xAmzDate = "ut";
                xAmzSecurityToken = "eum";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "assumenda";
            }};            

            ListRulesResponse res = sdk.sdk.listRules(req);

            if (res.listRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSizeConstraintSets

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSizeConstraintSetsRequest;
import org.openapis.openapi.models.operations.ListSizeConstraintSetsResponse;
import org.openapis.openapi.models.operations.ListSizeConstraintSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSizeConstraintSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSizeConstraintSetsRequest req = new ListSizeConstraintSetsRequest(                new ListSizeConstraintSetsRequest() {{
                                limit = 509342L;
                                nextMarker = "quisquam";
                            }};, ListSizeConstraintSetsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_SIZE_CONSTRAINT_SETS) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "id";
                xAmzDate = "quidem";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            ListSizeConstraintSetsResponse res = sdk.sdk.listSizeConstraintSets(req);

            if (res.listSizeConstraintSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSqlInjectionMatchSets

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSqlInjectionMatchSetsRequest;
import org.openapis.openapi.models.operations.ListSqlInjectionMatchSetsResponse;
import org.openapis.openapi.models.operations.ListSqlInjectionMatchSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSqlInjectionMatchSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSqlInjectionMatchSetsRequest req = new ListSqlInjectionMatchSetsRequest(                new ListSqlInjectionMatchSetsRequest() {{
                                limit = 681359L;
                                nextMarker = "eius";
                            }};, ListSqlInjectionMatchSetsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_SQL_INJECTION_MATCH_SETS) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "ab";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "debitis";
            }};            

            ListSqlInjectionMatchSetsResponse res = sdk.sdk.listSqlInjectionMatchSets(req);

            if (res.listSqlInjectionMatchSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubscribedRuleGroups

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubscribedRuleGroupsRequest;
import org.openapis.openapi.models.operations.ListSubscribedRuleGroupsResponse;
import org.openapis.openapi.models.operations.ListSubscribedRuleGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSubscribedRuleGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSubscribedRuleGroupsRequest req = new ListSubscribedRuleGroupsRequest(                new ListSubscribedRuleGroupsRequest() {{
                                limit = 133465L;
                                nextMarker = "sequi";
                            }};, ListSubscribedRuleGroupsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_SUBSCRIBED_RULE_GROUPS) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "esse";
                xAmzCredential = "recusandae";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "dignissimos";
            }};            

            ListSubscribedRuleGroupsResponse res = sdk.sdk.listSubscribedRuleGroups(req);

            if (res.listSubscribedRuleGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Retrieves the tags associated with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("nihil") {{
                                limit = 518835L;
                                nextMarker = "accusamus";
                            }};, ListTagsForResourceXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "commodi";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "deserunt";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebACLs

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebACLsRequest;
import org.openapis.openapi.models.operations.ListWebACLsResponse;
import org.openapis.openapi.models.operations.ListWebACLsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWebACLsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWebACLsRequest req = new ListWebACLsRequest(                new ListWebACLsRequest() {{
                                limit = 35362L;
                                nextMarker = "porro";
                            }};, ListWebACLsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_WEB_AC_LS) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "praesentium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "fuga";
            }};            

            ListWebACLsResponse res = sdk.sdk.listWebACLs(req);

            if (res.listWebACLsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listXssMatchSets

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>XssMatchSet</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListXssMatchSetsRequest;
import org.openapis.openapi.models.operations.ListXssMatchSetsResponse;
import org.openapis.openapi.models.operations.ListXssMatchSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListXssMatchSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListXssMatchSetsRequest req = new ListXssMatchSetsRequest(                new ListXssMatchSetsRequest() {{
                                limit = 277596L;
                                nextMarker = "atque";
                            }};, ListXssMatchSetsXAmzTargetEnum.AWSWAF_REGIONAL20161128_LIST_XSS_MATCH_SETS) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nisi";
                xAmzDate = "fugit";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "ratione";
            }};            

            ListXssMatchSetsResponse res = sdk.sdk.listXssMatchSets(req);

            if (res.listXssMatchSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLoggingConfiguration

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p> <p>You can access information about all traffic that AWS WAF inspects using the following steps:</p> <ol> <li> <p>Create an Amazon Kinesis Data Firehose. </p> <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p> <note> <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p> </note> </li> <li> <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.PutLoggingConfigurationResponse;
import org.openapis.openapi.models.operations.PutLoggingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.FieldToMatch;
import org.openapis.openapi.models.shared.LoggingConfiguration;
import org.openapis.openapi.models.shared.MatchFieldTypeEnum;
import org.openapis.openapi.models.shared.PutLoggingConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLoggingConfigurationRequest req = new PutLoggingConfigurationRequest(                new PutLoggingConfigurationRequest(                new LoggingConfiguration(                new String[]{{
                                                                add("occaecati"),
                                                                add("atque"),
                                                                add("et"),
                                                                add("esse"),
                                                            }}, "eveniet") {{
                                                redactedFields = new org.openapis.openapi.models.shared.FieldToMatch[]{{
                                                    add(new FieldToMatch(MatchFieldTypeEnum.SINGLE_QUERY_ARG) {{
                                                        data = "veritatis";
                                                        type = MatchFieldTypeEnum.METHOD;
                                                    }}),
                                                    add(new FieldToMatch(MatchFieldTypeEnum.HEADER) {{
                                                        data = "nam";
                                                        type = MatchFieldTypeEnum.ALL_QUERY_ARGS;
                                                    }}),
                                                    add(new FieldToMatch(MatchFieldTypeEnum.HEADER) {{
                                                        data = "quasi";
                                                        type = MatchFieldTypeEnum.ALL_QUERY_ARGS;
                                                    }}),
                                                    add(new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                        data = "harum";
                                                        type = MatchFieldTypeEnum.METHOD;
                                                    }}),
                                                }};
                                            }};);, PutLoggingConfigurationXAmzTargetEnum.AWSWAF_REGIONAL20161128_PUT_LOGGING_CONFIGURATION) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "minima";
                xAmzCredential = "distinctio";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sit";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "tempore";
            }};            

            PutLoggingConfigurationResponse res = sdk.sdk.putLoggingConfiguration(req);

            if (res.putLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPermissionPolicy

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p> <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p> </li> <li> <p>The policy cannot include a <code>Resource</code> parameter.</p> </li> <li> <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the RuleGroup.</p> </li> <li> <p>Your policy must be composed using IAM Policy version 2012-10-17.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>. </p> <p>An example of a valid policy parameter is shown in the Examples section below.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPermissionPolicyRequest;
import org.openapis.openapi.models.operations.PutPermissionPolicyResponse;
import org.openapis.openapi.models.operations.PutPermissionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutPermissionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPermissionPolicyRequest req = new PutPermissionPolicyRequest(                new PutPermissionPolicyRequest("cumque", "consequuntur");, PutPermissionPolicyXAmzTargetEnum.AWSWAF_REGIONAL20161128_PUT_PERMISSION_POLICY) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quaerat";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "blanditiis";
            }};            

            PutPermissionPolicyResponse res = sdk.sdk.putPermissionPolicy(req);

            if (res.putPermissionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can use this action to tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("a",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("quasi", "a") {{
                                                    key = "quas";
                                                    value = "esse";
                                                }}),
                                                add(new Tag("pariatur", "possimus") {{
                                                    key = "error";
                                                    value = "sint";
                                                }}),
                                                add(new Tag("asperiores", "facere") {{
                                                    key = "quia";
                                                    value = "eveniet";
                                                }}),
                                                add(new Tag("quasi", "similique") {{
                                                    key = "veritatis";
                                                    value = "consequuntur";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWSWAF_REGIONAL20161128_TAG_RESOURCE) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "tenetur";
                xAmzDate = "quae";
                xAmzSecurityToken = "earum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "in";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("libero",                 new String[]{{
                                                add("soluta"),
                                                add("accusantium"),
                                                add("aliquam"),
                                                add("sapiente"),
                                            }});, UntagResourceXAmzTargetEnum.AWSWAF_REGIONAL20161128_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateByteMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p> </li> <li> <p>Where to look, such as at the beginning or the end of a query string.</p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateByteMatchSetRequest;
import org.openapis.openapi.models.operations.UpdateByteMatchSetResponse;
import org.openapis.openapi.models.operations.UpdateByteMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ByteMatchSetUpdate;
import org.openapis.openapi.models.shared.ByteMatchTuple;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.FieldToMatch;
import org.openapis.openapi.models.shared.MatchFieldTypeEnum;
import org.openapis.openapi.models.shared.PositionalConstraintEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TextTransformationEnum;
import org.openapis.openapi.models.shared.UpdateByteMatchSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateByteMatchSetRequest req = new UpdateByteMatchSetRequest(                new UpdateByteMatchSetRequest("quibusdam", "ex",                 new org.openapis.openapi.models.shared.ByteMatchSetUpdate[]{{
                                                add(new ByteMatchSetUpdate(ChangeActionEnum.INSERT,                 new ByteMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.QUERY_STRING) {{
                                                                                    data = "iste";
                                                                                }};, PositionalConstraintEnum.CONTAINS_WORD, "accusantium", TextTransformationEnum.LOWERCASE);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    byteMatchTuple = new ByteMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.URI) {{
                                                                        data = "voluptate";
                                                                    }};, PositionalConstraintEnum.EXACTLY, "minima", TextTransformationEnum.NONE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                            data = "dolorum";
                                                            type = MatchFieldTypeEnum.URI;
                                                        }};
                                                        positionalConstraint = PositionalConstraintEnum.CONTAINS_WORD;
                                                        targetString = "quasi";
                                                        textTransformation = TextTransformationEnum.URL_DECODE;
                                                    }};
                                                }}),
                                                add(new ByteMatchSetUpdate(ChangeActionEnum.INSERT,                 new ByteMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.HEADER) {{
                                                                                    data = "aut";
                                                                                }};, PositionalConstraintEnum.ENDS_WITH, "dicta", TextTransformationEnum.URL_DECODE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    byteMatchTuple = new ByteMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.URI) {{
                                                                        data = "dolor";
                                                                    }};, PositionalConstraintEnum.ENDS_WITH, "numquam", TextTransformationEnum.CMD_LINE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                            data = "laudantium";
                                                            type = MatchFieldTypeEnum.METHOD;
                                                        }};
                                                        positionalConstraint = PositionalConstraintEnum.EXACTLY;
                                                        targetString = "corrupti";
                                                        textTransformation = TextTransformationEnum.COMPRESS_WHITE_SPACE;
                                                    }};
                                                }}),
                                                add(new ByteMatchSetUpdate(ChangeActionEnum.INSERT,                 new ByteMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                                                    data = "asperiores";
                                                                                }};, PositionalConstraintEnum.STARTS_WITH, "quae", TextTransformationEnum.COMPRESS_WHITE_SPACE);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    byteMatchTuple = new ByteMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.HEADER) {{
                                                                        data = "consequuntur";
                                                                    }};, PositionalConstraintEnum.CONTAINS_WORD, "officia", TextTransformationEnum.CMD_LINE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.HEADER) {{
                                                            data = "velit";
                                                            type = MatchFieldTypeEnum.ALL_QUERY_ARGS;
                                                        }};
                                                        positionalConstraint = PositionalConstraintEnum.CONTAINS_WORD;
                                                        targetString = "aperiam";
                                                        textTransformation = TextTransformationEnum.HTML_ENTITY_DECODE;
                                                    }};
                                                }}),
                                            }});, UpdateByteMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_BYTE_MATCH_SET) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "quod";
                xAmzCredential = "labore";
                xAmzDate = "ab";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "id";
            }};            

            UpdateByteMatchSetResponse res = sdk.sdk.updateByteMatchSet(req);

            if (res.updateByteMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGeoMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p> </li> <li> <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p> </li> </ul> <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateGeoMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGeoMatchSetRequest;
import org.openapis.openapi.models.operations.UpdateGeoMatchSetResponse;
import org.openapis.openapi.models.operations.UpdateGeoMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.GeoMatchConstraint;
import org.openapis.openapi.models.shared.GeoMatchConstraintTypeEnum;
import org.openapis.openapi.models.shared.GeoMatchConstraintValueEnum;
import org.openapis.openapi.models.shared.GeoMatchSetUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGeoMatchSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGeoMatchSetRequest req = new UpdateGeoMatchSetRequest(                new UpdateGeoMatchSetRequest("velit", "culpa",                 new org.openapis.openapi.models.shared.GeoMatchSetUpdate[]{{
                                                add(new GeoMatchSetUpdate(ChangeActionEnum.INSERT,                 new GeoMatchConstraint(GeoMatchConstraintTypeEnum.COUNTRY, GeoMatchConstraintValueEnum.LB);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    geoMatchConstraint = new GeoMatchConstraint(GeoMatchConstraintTypeEnum.COUNTRY, GeoMatchConstraintValueEnum.SJ) {{
                                                        type = GeoMatchConstraintTypeEnum.COUNTRY;
                                                        value = GeoMatchConstraintValueEnum.LT;
                                                    }};
                                                }}),
                                                add(new GeoMatchSetUpdate(ChangeActionEnum.DELETE,                 new GeoMatchConstraint(GeoMatchConstraintTypeEnum.COUNTRY, GeoMatchConstraintValueEnum.PN);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    geoMatchConstraint = new GeoMatchConstraint(GeoMatchConstraintTypeEnum.COUNTRY, GeoMatchConstraintValueEnum.FK) {{
                                                        type = GeoMatchConstraintTypeEnum.COUNTRY;
                                                        value = GeoMatchConstraintValueEnum.IE;
                                                    }};
                                                }}),
                                                add(new GeoMatchSetUpdate(ChangeActionEnum.INSERT,                 new GeoMatchConstraint(GeoMatchConstraintTypeEnum.COUNTRY, GeoMatchConstraintValueEnum.VN);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    geoMatchConstraint = new GeoMatchConstraint(GeoMatchConstraintTypeEnum.COUNTRY, GeoMatchConstraintValueEnum.JP) {{
                                                        type = GeoMatchConstraintTypeEnum.COUNTRY;
                                                        value = GeoMatchConstraintValueEnum.ID;
                                                    }};
                                                }}),
                                            }});, UpdateGeoMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_GEO_MATCH_SET) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "recusandae";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "consectetur";
            }};            

            UpdateGeoMatchSetResponse res = sdk.sdk.updateGeoMatchSet(req);

            if (res.updateGeoMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIPSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>IPSetDescriptor</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p> </li> <li> <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or <code>192.0.2.44/32</code> (for the individual IP address <code>192.0.2.44</code>). </p> </li> </ul> <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>IPv6 addresses can be represented using any of the following formats:</p> <ul> <li> <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p> </li> <li> <p>1111:0:0:0:0:0:0:0111/128</p> </li> <li> <p>1111::0111/128</p> </li> <li> <p>1111::111/128</p> </li> </ul> <p>You use an <code>IPSet</code> to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you're receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that specifies those IP addresses, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateIPSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one.</p> <p>You can insert a maximum of 1000 addresses in a single request.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIPSetRequest;
import org.openapis.openapi.models.operations.UpdateIPSetResponse;
import org.openapis.openapi.models.operations.UpdateIPSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.IPSetDescriptor;
import org.openapis.openapi.models.shared.IPSetDescriptorTypeEnum;
import org.openapis.openapi.models.shared.IPSetUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateIPSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIPSetRequest req = new UpdateIPSetRequest(                new UpdateIPSetRequest("exercitationem", "earum",                 new org.openapis.openapi.models.shared.IPSetUpdate[]{{
                                                add(new IPSetUpdate(ChangeActionEnum.DELETE,                 new IPSetDescriptor(IPSetDescriptorTypeEnum.IPV6, "dolore");) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    ipSetDescriptor = new IPSetDescriptor(IPSetDescriptorTypeEnum.IPV6, "quidem") {{
                                                        type = IPSetDescriptorTypeEnum.IPV6;
                                                        value = "suscipit";
                                                    }};
                                                }}),
                                                add(new IPSetUpdate(ChangeActionEnum.INSERT,                 new IPSetDescriptor(IPSetDescriptorTypeEnum.IPV4, "a");) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    ipSetDescriptor = new IPSetDescriptor(IPSetDescriptorTypeEnum.IPV4, "amet") {{
                                                        type = IPSetDescriptorTypeEnum.IPV6;
                                                        value = "adipisci";
                                                    }};
                                                }}),
                                                add(new IPSetUpdate(ChangeActionEnum.INSERT,                 new IPSetDescriptor(IPSetDescriptorTypeEnum.IPV6, "libero");) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    ipSetDescriptor = new IPSetDescriptor(IPSetDescriptorTypeEnum.IPV6, "laboriosam") {{
                                                        type = IPSetDescriptorTypeEnum.IPV4;
                                                        value = "corporis";
                                                    }};
                                                }}),
                                                add(new IPSetUpdate(ChangeActionEnum.INSERT,                 new IPSetDescriptor(IPSetDescriptorTypeEnum.IPV4, "voluptas");) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    ipSetDescriptor = new IPSetDescriptor(IPSetDescriptorTypeEnum.IPV4, "aspernatur") {{
                                                        type = IPSetDescriptorTypeEnum.IPV6;
                                                        value = "similique";
                                                    }};
                                                }}),
                                            }});, UpdateIPSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_IP_SET) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolorum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "minus";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "blanditiis";
            }};            

            UpdateIPSetResponse res = sdk.sdk.updateIPSet(req);

            if (res.updateIPSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRateBasedRule

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the <code>RateLimit</code> in the rule. </p> <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to block or count. The <code>RateLimit</code> specifies the number of requests every five minutes that triggers the rule.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRateBasedRuleRequest;
import org.openapis.openapi.models.operations.UpdateRateBasedRuleResponse;
import org.openapis.openapi.models.operations.UpdateRateBasedRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.Predicate;
import org.openapis.openapi.models.shared.PredicateTypeEnum;
import org.openapis.openapi.models.shared.RuleUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRateBasedRuleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRateBasedRuleRequest req = new UpdateRateBasedRuleRequest(                new UpdateRateBasedRuleRequest("dolore", 304468L, "officiis",                 new org.openapis.openapi.models.shared.RuleUpdate[]{{
                                                add(new RuleUpdate(ChangeActionEnum.DELETE,                 new Predicate("nesciunt", false, PredicateTypeEnum.SIZE_CONSTRAINT);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    predicate = new Predicate("blanditiis", false, PredicateTypeEnum.GEO_MATCH) {{
                                                        dataId = "adipisci";
                                                        negated = false;
                                                        type = PredicateTypeEnum.XSS_MATCH;
                                                    }};
                                                }}),
                                                add(new RuleUpdate(ChangeActionEnum.DELETE,                 new Predicate("sit", false, PredicateTypeEnum.SIZE_CONSTRAINT);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    predicate = new Predicate("hic", false, PredicateTypeEnum.SQL_INJECTION_MATCH) {{
                                                        dataId = "pariatur";
                                                        negated = false;
                                                        type = PredicateTypeEnum.GEO_MATCH;
                                                    }};
                                                }}),
                                                add(new RuleUpdate(ChangeActionEnum.INSERT,                 new Predicate("expedita", false, PredicateTypeEnum.IP_MATCH);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    predicate = new Predicate("asperiores", false, PredicateTypeEnum.SIZE_CONSTRAINT) {{
                                                        dataId = "reiciendis";
                                                        negated = false;
                                                        type = PredicateTypeEnum.IP_MATCH;
                                                    }};
                                                }}),
                                                add(new RuleUpdate(ChangeActionEnum.INSERT,                 new Predicate("quidem", false, PredicateTypeEnum.IP_MATCH);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    predicate = new Predicate("sed", false, PredicateTypeEnum.GEO_MATCH) {{
                                                        dataId = "dolore";
                                                        negated = false;
                                                        type = PredicateTypeEnum.SIZE_CONSTRAINT;
                                                    }};
                                                }}),
                                            }});, UpdateRateBasedRuleXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_RATE_BASED_RULE) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "unde";
                xAmzCredential = "architecto";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "illo";
            }};            

            UpdateRateBasedRuleResponse res = sdk.sdk.updateRateBasedRule(req);

            if (res.updateRateBasedRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRegexMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRegexMatchSetRequest;
import org.openapis.openapi.models.operations.UpdateRegexMatchSetResponse;
import org.openapis.openapi.models.operations.UpdateRegexMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.FieldToMatch;
import org.openapis.openapi.models.shared.MatchFieldTypeEnum;
import org.openapis.openapi.models.shared.RegexMatchSetUpdate;
import org.openapis.openapi.models.shared.RegexMatchTuple;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TextTransformationEnum;
import org.openapis.openapi.models.shared.UpdateRegexMatchSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRegexMatchSetRequest req = new UpdateRegexMatchSetRequest(                new UpdateRegexMatchSetRequest("perferendis", "corrupti",                 new org.openapis.openapi.models.shared.RegexMatchSetUpdate[]{{
                                                add(new RegexMatchSetUpdate(ChangeActionEnum.INSERT,                 new RegexMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.QUERY_STRING) {{
                                                                                    data = "voluptate";
                                                                                }};, "reiciendis", TextTransformationEnum.HTML_ENTITY_DECODE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    regexMatchTuple = new RegexMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.HEADER) {{
                                                                        data = "occaecati";
                                                                    }};, "quos", TextTransformationEnum.URL_DECODE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.QUERY_STRING) {{
                                                            data = "sed";
                                                            type = MatchFieldTypeEnum.BODY;
                                                        }};
                                                        regexPatternSetId = "necessitatibus";
                                                        textTransformation = TextTransformationEnum.COMPRESS_WHITE_SPACE;
                                                    }};
                                                }}),
                                                add(new RegexMatchSetUpdate(ChangeActionEnum.INSERT,                 new RegexMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.SINGLE_QUERY_ARG) {{
                                                                                    data = "error";
                                                                                }};, "veniam", TextTransformationEnum.COMPRESS_WHITE_SPACE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    regexMatchTuple = new RegexMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.QUERY_STRING) {{
                                                                        data = "ipsam";
                                                                    }};, "debitis", TextTransformationEnum.LOWERCASE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.METHOD) {{
                                                            data = "non";
                                                            type = MatchFieldTypeEnum.ALL_QUERY_ARGS;
                                                        }};
                                                        regexPatternSetId = "facilis";
                                                        textTransformation = TextTransformationEnum.COMPRESS_WHITE_SPACE;
                                                    }};
                                                }}),
                                                add(new RegexMatchSetUpdate(ChangeActionEnum.INSERT,                 new RegexMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.METHOD) {{
                                                                                    data = "exercitationem";
                                                                                }};, "praesentium", TextTransformationEnum.CMD_LINE);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    regexMatchTuple = new RegexMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.QUERY_STRING) {{
                                                                        data = "veniam";
                                                                    }};, "in", TextTransformationEnum.URL_DECODE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.QUERY_STRING) {{
                                                            data = "reiciendis";
                                                            type = MatchFieldTypeEnum.ALL_QUERY_ARGS;
                                                        }};
                                                        regexPatternSetId = "aperiam";
                                                        textTransformation = TextTransformationEnum.URL_DECODE;
                                                    }};
                                                }}),
                                                add(new RegexMatchSetUpdate(ChangeActionEnum.DELETE,                 new RegexMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                                                    data = "corrupti";
                                                                                }};, "accusamus", TextTransformationEnum.COMPRESS_WHITE_SPACE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    regexMatchTuple = new RegexMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.ALL_QUERY_ARGS) {{
                                                                        data = "neque";
                                                                    }};, "dolorum", TextTransformationEnum.HTML_ENTITY_DECODE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                            data = "dolorum";
                                                            type = MatchFieldTypeEnum.METHOD;
                                                        }};
                                                        regexPatternSetId = "hic";
                                                        textTransformation = TextTransformationEnum.CMD_LINE;
                                                    }};
                                                }}),
                                            }});, UpdateRegexMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_REGEX_MATCH_SET) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "ut";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "expedita";
            }};            

            UpdateRegexMatchSetResponse res = sdk.sdk.updateRegexMatchSet(req);

            if (res.updateRegexMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRegexPatternSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the <code>RegexPatternString</code>.</p> </li> <li> <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p> </li> </ul> <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p> <ul> <li> <p>BadBot</p> </li> <li> <p>BadB0t</p> </li> <li> <p>B@dBot</p> </li> <li> <p>B@dB0t</p> </li> </ul> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRegexPatternSetRequest;
import org.openapis.openapi.models.operations.UpdateRegexPatternSetResponse;
import org.openapis.openapi.models.operations.UpdateRegexPatternSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.RegexPatternSetUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRegexPatternSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRegexPatternSetRequest req = new UpdateRegexPatternSetRequest(                new UpdateRegexPatternSetRequest("consequatur", "esse",                 new org.openapis.openapi.models.shared.RegexPatternSetUpdate[]{{
                                                add(new RegexPatternSetUpdate(ChangeActionEnum.DELETE, "repudiandae") {{
                                                    action = ChangeActionEnum.INSERT;
                                                    regexPatternString = "voluptatum";
                                                }}),
                                                add(new RegexPatternSetUpdate(ChangeActionEnum.DELETE, "ex") {{
                                                    action = ChangeActionEnum.INSERT;
                                                    regexPatternString = "et";
                                                }}),
                                            }});, UpdateRegexPatternSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_REGEX_PATTERN_SET) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "sit";
                xAmzCredential = "vel";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "error";
                xAmzSignedHeaders = "consequatur";
            }};            

            UpdateRegexPatternSetResponse res = sdk.sdk.updateRegexPatternSet(req);

            if (res.updateRegexPatternSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRule

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a <code>Rule</code>: </p> <ul> <li> <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code> </p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>. For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code> <i>and</i> the request must originate from the IP address 192.0.2.44.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRuleRequest;
import org.openapis.openapi.models.operations.UpdateRuleResponse;
import org.openapis.openapi.models.operations.UpdateRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.Predicate;
import org.openapis.openapi.models.shared.PredicateTypeEnum;
import org.openapis.openapi.models.shared.RuleUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRuleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRuleRequest req = new UpdateRuleRequest(                new UpdateRuleRequest("reiciendis", "dolorem",                 new org.openapis.openapi.models.shared.RuleUpdate[]{{
                                                add(new RuleUpdate(ChangeActionEnum.DELETE,                 new Predicate("laborum", false, PredicateTypeEnum.XSS_MATCH);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    predicate = new Predicate("labore", false, PredicateTypeEnum.SIZE_CONSTRAINT) {{
                                                        dataId = "architecto";
                                                        negated = false;
                                                        type = PredicateTypeEnum.SIZE_CONSTRAINT;
                                                    }};
                                                }}),
                                                add(new RuleUpdate(ChangeActionEnum.INSERT,                 new Predicate("unde", false, PredicateTypeEnum.REGEX_MATCH);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    predicate = new Predicate("amet", false, PredicateTypeEnum.SIZE_CONSTRAINT) {{
                                                        dataId = "laboriosam";
                                                        negated = false;
                                                        type = PredicateTypeEnum.IP_MATCH;
                                                    }};
                                                }}),
                                                add(new RuleUpdate(ChangeActionEnum.DELETE,                 new Predicate("quidem", false, PredicateTypeEnum.GEO_MATCH);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    predicate = new Predicate("voluptates", false, PredicateTypeEnum.IP_MATCH) {{
                                                        dataId = "repellendus";
                                                        negated = false;
                                                        type = PredicateTypeEnum.REGEX_MATCH;
                                                    }};
                                                }}),
                                            }});, UpdateRuleXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_RULE) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "praesentium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "quisquam";
            }};            

            UpdateRuleResponse res = sdk.sdk.updateRule(req);

            if (res.updateRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRuleGroup

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p> <p>You can only insert <code>REGULAR</code> rules into a rule group.</p> <p>You can have a maximum of ten rules per rule group.</p> <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRuleGroup</a> request.</p> </li> <li> <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRuleGroupRequest;
import org.openapis.openapi.models.operations.UpdateRuleGroupResponse;
import org.openapis.openapi.models.operations.UpdateRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivatedRule;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.ExcludedRule;
import org.openapis.openapi.models.shared.RuleGroupUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRuleGroupRequest;
import org.openapis.openapi.models.shared.WafAction;
import org.openapis.openapi.models.shared.WafActionTypeEnum;
import org.openapis.openapi.models.shared.WafOverrideAction;
import org.openapis.openapi.models.shared.WafOverrideActionTypeEnum;
import org.openapis.openapi.models.shared.WafRuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRuleGroupRequest req = new UpdateRuleGroupRequest(                new UpdateRuleGroupRequest("quasi", "atque",                 new org.openapis.openapi.models.shared.RuleGroupUpdate[]{{
                                                add(new RuleGroupUpdate(ChangeActionEnum.INSERT,                 new ActivatedRule(404425L, "maiores") {{
                                                                    action = new WafAction(WafActionTypeEnum.ALLOW);;
                                                                    excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                                        add(new ExcludedRule("blanditiis") {{
                                                                            ruleId = "error";
                                                                        }}),
                                                                        add(new ExcludedRule("repudiandae") {{
                                                                            ruleId = "suscipit";
                                                                        }}),
                                                                        add(new ExcludedRule("atque") {{
                                                                            ruleId = "atque";
                                                                        }}),
                                                                        add(new ExcludedRule("recusandae") {{
                                                                            ruleId = "sunt";
                                                                        }}),
                                                                    }};
                                                                    overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.COUNT);;
                                                                    type = WafRuleTypeEnum.GROUP;
                                                                }};) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    activatedRule = new ActivatedRule(618826L, "minima") {{
                                                        action = new WafAction(WafActionTypeEnum.ALLOW) {{
                                                            type = WafActionTypeEnum.ALLOW;
                                                        }};
                                                        excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                            add(new ExcludedRule("et") {{
                                                                ruleId = "maxime";
                                                            }}),
                                                            add(new ExcludedRule("amet") {{
                                                                ruleId = "esse";
                                                            }}),
                                                            add(new ExcludedRule("ea") {{
                                                                ruleId = "assumenda";
                                                            }}),
                                                        }};
                                                        overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.COUNT) {{
                                                            type = WafOverrideActionTypeEnum.COUNT;
                                                        }};
                                                        priority = 887265L;
                                                        ruleId = "officiis";
                                                        type = WafRuleTypeEnum.GROUP;
                                                    }};
                                                }}),
                                                add(new RuleGroupUpdate(ChangeActionEnum.INSERT,                 new ActivatedRule(238043L, "eveniet") {{
                                                                    action = new WafAction(WafActionTypeEnum.ALLOW);;
                                                                    excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                                        add(new ExcludedRule("id") {{
                                                                            ruleId = "fugit";
                                                                        }}),
                                                                    }};
                                                                    overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.NONE);;
                                                                    type = WafRuleTypeEnum.RATE_BASED;
                                                                }};) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    activatedRule = new ActivatedRule(886305L, "perspiciatis") {{
                                                        action = new WafAction(WafActionTypeEnum.BLOCK) {{
                                                            type = WafActionTypeEnum.COUNT;
                                                        }};
                                                        excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                            add(new ExcludedRule("accusantium") {{
                                                                ruleId = "dicta";
                                                            }}),
                                                            add(new ExcludedRule("dolores") {{
                                                                ruleId = "beatae";
                                                            }}),
                                                            add(new ExcludedRule("laboriosam") {{
                                                                ruleId = "enim";
                                                            }}),
                                                            add(new ExcludedRule("a") {{
                                                                ruleId = "velit";
                                                            }}),
                                                        }};
                                                        overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.NONE) {{
                                                            type = WafOverrideActionTypeEnum.COUNT;
                                                        }};
                                                        priority = 906355L;
                                                        ruleId = "consequuntur";
                                                        type = WafRuleTypeEnum.RATE_BASED;
                                                    }};
                                                }}),
                                            }});, UpdateRuleGroupXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_RULE_GROUP) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "illo";
                xAmzCredential = "corporis";
                xAmzDate = "quidem";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "non";
                xAmzSignedHeaders = "vero";
            }};            

            UpdateRuleGroupResponse res = sdk.sdk.updateRuleGroup(req);

            if (res.updateRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSizeConstraintSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the <code>User-Agent</code> header.</p> </li> <li> <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length. Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes of your request to AWS WAF.</p> <p>You can only specify a single type of TextTransformation.</p> </li> <li> <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as equals, greater than, less than, and so on.</p> </li> <li> <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p> </li> </ul> <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the <code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSizeConstraintSetRequest;
import org.openapis.openapi.models.operations.UpdateSizeConstraintSetResponse;
import org.openapis.openapi.models.operations.UpdateSizeConstraintSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.FieldToMatch;
import org.openapis.openapi.models.shared.MatchFieldTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SizeConstraint;
import org.openapis.openapi.models.shared.SizeConstraintSetUpdate;
import org.openapis.openapi.models.shared.TextTransformationEnum;
import org.openapis.openapi.models.shared.UpdateSizeConstraintSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSizeConstraintSetRequest req = new UpdateSizeConstraintSetRequest(                new UpdateSizeConstraintSetRequest("iure", "ipsa",                 new org.openapis.openapi.models.shared.SizeConstraintSetUpdate[]{{
                                                add(new SizeConstraintSetUpdate(ChangeActionEnum.INSERT,                 new SizeConstraint(ComparisonOperatorEnum.NE,                 new FieldToMatch(MatchFieldTypeEnum.ALL_QUERY_ARGS) {{
                                                                                    data = "alias";
                                                                                }};, 362189L, TextTransformationEnum.LOWERCASE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    sizeConstraint = new SizeConstraint(ComparisonOperatorEnum.NE,                 new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                                        data = "distinctio";
                                                                    }};, 528940L, TextTransformationEnum.LOWERCASE) {{
                                                        comparisonOperator = ComparisonOperatorEnum.LE;
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.SINGLE_QUERY_ARG) {{
                                                            data = "eveniet";
                                                            type = MatchFieldTypeEnum.QUERY_STRING;
                                                        }};
                                                        size = 434761L;
                                                        textTransformation = TextTransformationEnum.URL_DECODE;
                                                    }};
                                                }}),
                                                add(new SizeConstraintSetUpdate(ChangeActionEnum.INSERT,                 new SizeConstraint(ComparisonOperatorEnum.GT,                 new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                                                    data = "quaerat";
                                                                                }};, 477646L, TextTransformationEnum.HTML_ENTITY_DECODE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    sizeConstraint = new SizeConstraint(ComparisonOperatorEnum.LT,                 new FieldToMatch(MatchFieldTypeEnum.HEADER) {{
                                                                        data = "dolore";
                                                                    }};, 680349L, TextTransformationEnum.COMPRESS_WHITE_SPACE) {{
                                                        comparisonOperator = ComparisonOperatorEnum.LT;
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.ALL_QUERY_ARGS) {{
                                                            data = "voluptas";
                                                            type = MatchFieldTypeEnum.URI;
                                                        }};
                                                        size = 970222L;
                                                        textTransformation = TextTransformationEnum.COMPRESS_WHITE_SPACE;
                                                    }};
                                                }}),
                                                add(new SizeConstraintSetUpdate(ChangeActionEnum.DELETE,                 new SizeConstraint(ComparisonOperatorEnum.LT,                 new FieldToMatch(MatchFieldTypeEnum.URI) {{
                                                                                    data = "ullam";
                                                                                }};, 96804L, TextTransformationEnum.LOWERCASE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    sizeConstraint = new SizeConstraint(ComparisonOperatorEnum.GT,                 new FieldToMatch(MatchFieldTypeEnum.METHOD) {{
                                                                        data = "provident";
                                                                    }};, 337477L, TextTransformationEnum.HTML_ENTITY_DECODE) {{
                                                        comparisonOperator = ComparisonOperatorEnum.LT;
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.METHOD) {{
                                                            data = "adipisci";
                                                            type = MatchFieldTypeEnum.ALL_QUERY_ARGS;
                                                        }};
                                                        size = 432606L;
                                                        textTransformation = TextTransformationEnum.HTML_ENTITY_DECODE;
                                                    }};
                                                }}),
                                            }});, UpdateSizeConstraintSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_SIZE_CONSTRAINT_SET) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "provident";
                xAmzDate = "possimus";
                xAmzSecurityToken = "animi";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "aliquid";
            }};            

            UpdateSizeConstraintSetResponse res = sdk.sdk.updateSizeConstraintSet(req);

            if (res.updateSizeConstraintSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSqlInjectionMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SqlInjectionMatchTuple</a> objects (filters) in a <a>SqlInjectionMatchSet</a>. For each <code>SqlInjectionMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change a <code>SqlInjectionMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>SqlInjectionMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a <code>SqlInjectionMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateSqlInjectionMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSqlInjectionMatchSetRequest;
import org.openapis.openapi.models.operations.UpdateSqlInjectionMatchSetResponse;
import org.openapis.openapi.models.operations.UpdateSqlInjectionMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.FieldToMatch;
import org.openapis.openapi.models.shared.MatchFieldTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqlInjectionMatchSetUpdate;
import org.openapis.openapi.models.shared.SqlInjectionMatchTuple;
import org.openapis.openapi.models.shared.TextTransformationEnum;
import org.openapis.openapi.models.shared.UpdateSqlInjectionMatchSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSqlInjectionMatchSetRequest req = new UpdateSqlInjectionMatchSetRequest(                new UpdateSqlInjectionMatchSetRequest("repellat", "doloribus",                 new org.openapis.openapi.models.shared.SqlInjectionMatchSetUpdate[]{{
                                                add(new SqlInjectionMatchSetUpdate(ChangeActionEnum.DELETE,                 new SqlInjectionMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.ALL_QUERY_ARGS) {{
                                                                                    data = "sapiente";
                                                                                }};, TextTransformationEnum.CMD_LINE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    sqlInjectionMatchTuple = new SqlInjectionMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.SINGLE_QUERY_ARG) {{
                                                                        data = "modi";
                                                                    }};, TextTransformationEnum.URL_DECODE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                            data = "nam";
                                                            type = MatchFieldTypeEnum.ALL_QUERY_ARGS;
                                                        }};
                                                        textTransformation = TextTransformationEnum.CMD_LINE;
                                                    }};
                                                }}),
                                                add(new SqlInjectionMatchSetUpdate(ChangeActionEnum.INSERT,                 new SqlInjectionMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.QUERY_STRING) {{
                                                                                    data = "aspernatur";
                                                                                }};, TextTransformationEnum.HTML_ENTITY_DECODE);) {{
                                                    action = ChangeActionEnum.INSERT;
                                                    sqlInjectionMatchTuple = new SqlInjectionMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.QUERY_STRING) {{
                                                                        data = "cumque";
                                                                    }};, TextTransformationEnum.NONE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.HEADER) {{
                                                            data = "rerum";
                                                            type = MatchFieldTypeEnum.QUERY_STRING;
                                                        }};
                                                        textTransformation = TextTransformationEnum.NONE;
                                                    }};
                                                }}),
                                            }});, UpdateSqlInjectionMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_SQL_INJECTION_MATCH_SET) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "rem";
                xAmzCredential = "at";
                xAmzDate = "impedit";
                xAmzSecurityToken = "eos";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "eum";
            }};            

            UpdateSqlInjectionMatchSetResponse res = sdk.sdk.updateSqlInjectionMatchSet(req);

            if (res.updateSqlInjectionMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebACL

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p> <ul> <li> <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>. AWS WAF performs the default action if a request doesn't match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p> </li> <li> <p>The <code>Rules</code> that you want to add or delete. If you want to replace one <code>Rule</code> with another, you delete the existing <code>Rule</code> and add the new one.</p> </li> <li> <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the <code>Rule</code>.</p> </li> <li> <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a <code>WebACL</code>. If you add more than one <code>Rule</code> to a <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code> in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has the lowest value for <code>Priority</code> is evaluated first.) When a web request matches all the predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining <code>Rules</code> in the <code>WebACL</code>, if any. </p> </li> </ul> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution. </p> <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group as your <code>ActivatedRule</code> , you can exclude specific rules from that rule group.</p> <p>If you already have a rule group associated with a web ACL and want to submit an <code>UpdateWebACL</code> request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see <a>ActivatedRule$ExcludedRules</a> . </p> </li> </ol> <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. </p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebACLRequest;
import org.openapis.openapi.models.operations.UpdateWebACLResponse;
import org.openapis.openapi.models.operations.UpdateWebACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivatedRule;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.ExcludedRule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWebACLRequest;
import org.openapis.openapi.models.shared.WafAction;
import org.openapis.openapi.models.shared.WafActionTypeEnum;
import org.openapis.openapi.models.shared.WafOverrideAction;
import org.openapis.openapi.models.shared.WafOverrideActionTypeEnum;
import org.openapis.openapi.models.shared.WafRuleTypeEnum;
import org.openapis.openapi.models.shared.WebACLUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWebACLRequest req = new UpdateWebACLRequest(                new UpdateWebACLRequest("minima", "beatae") {{
                                defaultAction = new WafAction(WafActionTypeEnum.ALLOW);;
                                updates = new org.openapis.openapi.models.shared.WebACLUpdate[]{{
                                    add(new WebACLUpdate(ChangeActionEnum.DELETE,                 new ActivatedRule(8931L, "quasi") {{
                                                        action = new WafAction(WafActionTypeEnum.BLOCK);;
                                                        excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                            add(new ExcludedRule("occaecati") {{
                                                                ruleId = "natus";
                                                            }}),
                                                            add(new ExcludedRule("adipisci") {{
                                                                ruleId = "suscipit";
                                                            }}),
                                                        }};
                                                        overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.NONE);;
                                                        type = WafRuleTypeEnum.REGULAR;
                                                    }};) {{
                                        action = ChangeActionEnum.DELETE;
                                        activatedRule = new ActivatedRule(656762L, "necessitatibus") {{
                                            action = new WafAction(WafActionTypeEnum.COUNT) {{
                                                type = WafActionTypeEnum.COUNT;
                                            }};
                                            excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                add(new ExcludedRule("earum") {{
                                                    ruleId = "eaque";
                                                }}),
                                                add(new ExcludedRule("maiores") {{
                                                    ruleId = "perspiciatis";
                                                }}),
                                                add(new ExcludedRule("aliquid") {{
                                                    ruleId = "debitis";
                                                }}),
                                                add(new ExcludedRule("suscipit") {{
                                                    ruleId = "porro";
                                                }}),
                                            }};
                                            overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.NONE) {{
                                                type = WafOverrideActionTypeEnum.NONE;
                                            }};
                                            priority = 764995L;
                                            ruleId = "fuga";
                                            type = WafRuleTypeEnum.REGULAR;
                                        }};
                                    }}),
                                    add(new WebACLUpdate(ChangeActionEnum.INSERT,                 new ActivatedRule(99958L, "fugiat") {{
                                                        action = new WafAction(WafActionTypeEnum.BLOCK);;
                                                        excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                            add(new ExcludedRule("tempora") {{
                                                                ruleId = "odio";
                                                            }}),
                                                        }};
                                                        overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.NONE);;
                                                        type = WafRuleTypeEnum.RATE_BASED;
                                                    }};) {{
                                        action = ChangeActionEnum.DELETE;
                                        activatedRule = new ActivatedRule(979963L, "reiciendis") {{
                                            action = new WafAction(WafActionTypeEnum.COUNT) {{
                                                type = WafActionTypeEnum.COUNT;
                                            }};
                                            excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                add(new ExcludedRule("nihil") {{
                                                    ruleId = "tempora";
                                                }}),
                                            }};
                                            overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.NONE) {{
                                                type = WafOverrideActionTypeEnum.NONE;
                                            }};
                                            priority = 479754L;
                                            ruleId = "esse";
                                            type = WafRuleTypeEnum.RATE_BASED;
                                        }};
                                    }}),
                                    add(new WebACLUpdate(ChangeActionEnum.INSERT,                 new ActivatedRule(625358L, "possimus") {{
                                                        action = new WafAction(WafActionTypeEnum.COUNT);;
                                                        excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                            add(new ExcludedRule("libero") {{
                                                                ruleId = "laborum";
                                                            }}),
                                                            add(new ExcludedRule("deleniti") {{
                                                                ruleId = "ad";
                                                            }}),
                                                            add(new ExcludedRule("vitae") {{
                                                                ruleId = "enim";
                                                            }}),
                                                        }};
                                                        overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.COUNT);;
                                                        type = WafRuleTypeEnum.RATE_BASED;
                                                    }};) {{
                                        action = ChangeActionEnum.INSERT;
                                        activatedRule = new ActivatedRule(614528L, "id") {{
                                            action = new WafAction(WafActionTypeEnum.BLOCK) {{
                                                type = WafActionTypeEnum.ALLOW;
                                            }};
                                            excludedRules = new org.openapis.openapi.models.shared.ExcludedRule[]{{
                                                add(new ExcludedRule("nostrum") {{
                                                    ruleId = "sunt";
                                                }}),
                                                add(new ExcludedRule("expedita") {{
                                                    ruleId = "fugiat";
                                                }}),
                                                add(new ExcludedRule("officia") {{
                                                    ruleId = "aliquid";
                                                }}),
                                            }};
                                            overrideAction = new WafOverrideAction(WafOverrideActionTypeEnum.NONE) {{
                                                type = WafOverrideActionTypeEnum.NONE;
                                            }};
                                            priority = 21973L;
                                            ruleId = "eum";
                                            type = WafRuleTypeEnum.RATE_BASED;
                                        }};
                                    }}),
                                }};
                            }};, UpdateWebACLXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_WEB_ACL) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "ex";
                xAmzCredential = "ut";
                xAmzDate = "ad";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "molestias";
            }};            

            UpdateWebACLResponse res = sdk.sdk.updateWebACL(req);

            if (res.updateWebACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateXssMatchSet

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>. For each <code>XssMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change an <code>XssMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an <code>XssMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateXssMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateXssMatchSetRequest;
import org.openapis.openapi.models.operations.UpdateXssMatchSetResponse;
import org.openapis.openapi.models.operations.UpdateXssMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangeActionEnum;
import org.openapis.openapi.models.shared.FieldToMatch;
import org.openapis.openapi.models.shared.MatchFieldTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TextTransformationEnum;
import org.openapis.openapi.models.shared.UpdateXssMatchSetRequest;
import org.openapis.openapi.models.shared.XssMatchSetUpdate;
import org.openapis.openapi.models.shared.XssMatchTuple;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateXssMatchSetRequest req = new UpdateXssMatchSetRequest(                new UpdateXssMatchSetRequest("aliquid",                 new org.openapis.openapi.models.shared.XssMatchSetUpdate[]{{
                                                add(new XssMatchSetUpdate(ChangeActionEnum.DELETE,                 new XssMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.URI) {{
                                                                                    data = "fuga";
                                                                                }};, TextTransformationEnum.URL_DECODE);) {{
                                                    action = ChangeActionEnum.DELETE;
                                                    xssMatchTuple = new XssMatchTuple(                new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                                        data = "voluptatem";
                                                                    }};, TextTransformationEnum.URL_DECODE) {{
                                                        fieldToMatch = new FieldToMatch(MatchFieldTypeEnum.BODY) {{
                                                            data = "omnis";
                                                            type = MatchFieldTypeEnum.URI;
                                                        }};
                                                        textTransformation = TextTransformationEnum.LOWERCASE;
                                                    }};
                                                }}),
                                            }}, "debitis");, UpdateXssMatchSetXAmzTargetEnum.AWSWAF_REGIONAL20161128_UPDATE_XSS_MATCH_SET) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "alias";
                xAmzCredential = "deleniti";
                xAmzDate = "earum";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "rem";
            }};            

            UpdateXssMatchSetResponse res = sdk.sdk.updateXssMatchSet(req);

            if (res.updateXssMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

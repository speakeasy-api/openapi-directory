/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DescribeIpamPoolsResultIpamPoolsAllocationResourceTags - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key &lt;code&gt;Owner&lt;/code&gt; and the value &lt;code&gt;TeamA&lt;/code&gt;, specify &lt;code&gt;tag:Owner&lt;/code&gt; for the filter name and &lt;code&gt;TeamA&lt;/code&gt; for the filter value.
 */
public class DescribeIpamPoolsResultIpamPoolsAllocationResourceTags {
    
    public String key;

    public DescribeIpamPoolsResultIpamPoolsAllocationResourceTags withKey(String key) {
        this.key = key;
        return this;
    }
    
    
    public String value;

    public DescribeIpamPoolsResultIpamPoolsAllocationResourceTags withValue(String value) {
        this.value = value;
        return this;
    }
    
    public DescribeIpamPoolsResultIpamPoolsAllocationResourceTags(){}
}

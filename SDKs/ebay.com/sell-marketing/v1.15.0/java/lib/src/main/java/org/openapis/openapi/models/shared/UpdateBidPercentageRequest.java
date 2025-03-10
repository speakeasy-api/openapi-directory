/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateBidPercentageRequest - This type specifies the bid percentage for an ad campaign.
 */
public class UpdateBidPercentageRequest {
    /**
     * The user-defined &lt;b&gt;bid percentage&lt;/b&gt; (also known as the &lt;i&gt;ad rate&lt;/i&gt;) sets the level that eBay increases the visibility in search results for the associated listing. The higher the &lt;b&gt;bidPercentage&lt;/b&gt; value, the more eBay promotes the listing.  &lt;br&gt;&lt;br&gt;The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. &lt;br&gt;&lt;br&gt;The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. &lt;br&gt;&lt;br&gt;The &lt;b&gt;bidPercentage&lt;/b&gt; is a single precision value that is guided by the following rules: &lt;ul&gt;&lt;li&gt;These values are &lt;b&gt;valid&lt;/b&gt;:&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;4.1&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.0&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.5&lt;/code&gt;, ...&lt;/li&gt;  &lt;li&gt;These values are &lt;b&gt;not valid&lt;/b&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;0.01&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;10.75&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;99.99&lt;/code&gt;,&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;and so on.&lt;/li&gt;&lt;/ul&gt;This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.&lt;br /&gt;&lt;br /&gt;If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Minimum value:&lt;/b&gt; 2.0 &lt;br&gt;&lt;b&gt;Maximum value:&lt;/b&gt; 100.0
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentage")
    public String bidPercentage;

    public UpdateBidPercentageRequest withBidPercentage(String bidPercentage) {
        this.bidPercentage = bidPercentage;
        return this;
    }
    
    public UpdateBidPercentageRequest(){}
}

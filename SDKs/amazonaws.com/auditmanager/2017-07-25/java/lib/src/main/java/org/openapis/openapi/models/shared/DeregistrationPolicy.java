/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeregistrationPolicy - &lt;p&gt;The deregistration policy for the data that's stored in Audit Manager. You can use this attribute to determine how your data is handled when you &lt;a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html"&gt;deregister Audit Manager&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you &lt;a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html"&gt;re-register Audit Manager&lt;/a&gt; in the future. For more information about data retention, see &lt;a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html"&gt;Data Protection&lt;/a&gt; in the &lt;i&gt;Audit Manager User Guide&lt;/i&gt;.&lt;/p&gt; &lt;important&gt; &lt;p&gt;If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.&lt;/p&gt; &lt;/important&gt;
 */
public class DeregistrationPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteResources")
    public DeleteResourcesEnum deleteResources;

    public DeregistrationPolicy withDeleteResources(DeleteResourcesEnum deleteResources) {
        this.deleteResources = deleteResources;
        return this;
    }
    
    public DeregistrationPolicy(){}
}

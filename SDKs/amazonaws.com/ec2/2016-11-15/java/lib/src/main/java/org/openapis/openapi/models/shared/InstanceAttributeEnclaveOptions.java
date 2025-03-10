/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * InstanceAttributeEnclaveOptions - To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to &lt;code&gt;true&lt;/code&gt;; otherwise, set it to &lt;code&gt;false&lt;/code&gt;.
 */
public class InstanceAttributeEnclaveOptions {
    
    public Boolean enabled;

    public InstanceAttributeEnclaveOptions withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    public InstanceAttributeEnclaveOptions(){}
}

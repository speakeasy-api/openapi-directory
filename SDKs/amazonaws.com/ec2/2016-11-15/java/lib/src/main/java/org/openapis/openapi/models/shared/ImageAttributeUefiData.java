/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * ImageAttributeUefiData - Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data, use the &lt;a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData"&gt;GetInstanceUefiData&lt;/a&gt; command. You can inspect and modify the UEFI data by using the &lt;a href="https://github.com/awslabs/python-uefivars"&gt;python-uefivars tool&lt;/a&gt; on GitHub. For more information, see &lt;a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html"&gt;UEFI Secure Boot&lt;/a&gt; in the &lt;i&gt;Amazon EC2 User Guide&lt;/i&gt;.
 */
public class ImageAttributeUefiData {
    
    public String value;

    public ImageAttributeUefiData withValue(String value) {
        this.value = value;
        return this;
    }
    
    public ImageAttributeUefiData(){}
}

package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPkcs12 {
    @SpeakeasyMetadata("multipartForm:file")
    public AppPkcs12P12File p12File;
    public AppPkcs12 withP12File(AppPkcs12P12File p12File) {
        this.p12File = p12File;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=p12Pass")
    public String p12Pass;
    public AppPkcs12 withP12Pass(String p12Pass) {
        this.p12Pass = p12Pass;
        return this;
    }
}
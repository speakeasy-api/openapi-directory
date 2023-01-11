package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=license")
    public String license;
    public LicensesGetPathParams withLicense(String license) {
        this.license = license;
        return this;
    }
}
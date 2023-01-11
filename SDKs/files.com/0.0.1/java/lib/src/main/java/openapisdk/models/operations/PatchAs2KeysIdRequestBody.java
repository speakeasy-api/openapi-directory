package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAs2KeysIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=as2_partnership_name")
    public String as2PartnershipName;
    public PatchAs2KeysIdRequestBody withAs2PartnershipName(String as2PartnershipName) {
        this.as2PartnershipName = as2PartnershipName;
        return this;
    }
}
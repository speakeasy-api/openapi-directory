package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdAs2KeysRequestBody {
    @SpeakeasyMetadata("multipartForm:name=as2_partnership_name")
    public String as2PartnershipName;
    public PostUsersUserIdAs2KeysRequestBody withAs2PartnershipName(String as2PartnershipName) {
        this.as2PartnershipName = as2PartnershipName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=public_key")
    public String publicKey;
    public PostUsersUserIdAs2KeysRequestBody withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}
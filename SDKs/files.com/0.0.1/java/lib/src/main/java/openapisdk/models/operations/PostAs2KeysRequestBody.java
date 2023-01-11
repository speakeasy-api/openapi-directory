package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAs2KeysRequestBody {
    @SpeakeasyMetadata("multipartForm:name=as2_partnership_name")
    public String as2PartnershipName;
    public PostAs2KeysRequestBody withAs2PartnershipName(String as2PartnershipName) {
        this.as2PartnershipName = as2PartnershipName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=public_key")
    public String publicKey;
    public PostAs2KeysRequestBody withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostAs2KeysRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}
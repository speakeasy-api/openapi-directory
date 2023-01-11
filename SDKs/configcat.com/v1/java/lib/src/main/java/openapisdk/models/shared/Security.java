package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public SchemeBasic basic;
    public Security withBasic(SchemeBasic basic) {
        this.basic = basic;
        return this;
    }
}
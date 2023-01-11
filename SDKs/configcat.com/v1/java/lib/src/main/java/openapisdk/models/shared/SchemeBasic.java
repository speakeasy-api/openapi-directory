package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeBasic {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeBasic withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeBasic withUsername(String username) {
        this.username = username;
        return this;
    }
}
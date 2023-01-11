package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAemAuth {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeAemAuth withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeAemAuth withUsername(String username) {
        this.username = username;
        return this;
    }
}
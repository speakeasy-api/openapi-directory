package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAuth {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeAuth withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeAuth withUsername(String username) {
        this.username = username;
        return this;
    }
}
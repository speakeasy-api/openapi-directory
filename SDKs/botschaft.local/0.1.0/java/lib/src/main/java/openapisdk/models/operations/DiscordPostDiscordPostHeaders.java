package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscordPostDiscordPostHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public DiscordPostDiscordPostHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}
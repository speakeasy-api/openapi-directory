package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsCreateTagRequestBody {
    @SpeakeasyMetadata("multipartForm:name=code")
    public String code;
    public FunctionsCreateTagRequestBody withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=command")
    public String command;
    public FunctionsCreateTagRequestBody withCommand(String command) {
        this.command = command;
        return this;
    }
}
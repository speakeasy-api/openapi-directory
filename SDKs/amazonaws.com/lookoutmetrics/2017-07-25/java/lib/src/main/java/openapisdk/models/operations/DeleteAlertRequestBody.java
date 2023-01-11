package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAlertRequestBody {
    @JsonProperty("AlertArn")
    public String alertArn;
    public DeleteAlertRequestBody withAlertArn(String alertArn) {
        this.alertArn = alertArn;
        return this;
    }
}
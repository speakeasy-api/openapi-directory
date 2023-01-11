package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAlertResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertArn")
    public String alertArn;
    public CreateAlertResponse withAlertArn(String alertArn) {
        this.alertArn = alertArn;
        return this;
    }
}
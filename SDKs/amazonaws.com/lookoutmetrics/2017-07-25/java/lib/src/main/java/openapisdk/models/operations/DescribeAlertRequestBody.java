package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAlertRequestBody {
    @JsonProperty("AlertArn")
    public String alertArn;
    public DescribeAlertRequestBody withAlertArn(String alertArn) {
        this.alertArn = alertArn;
        return this;
    }
}
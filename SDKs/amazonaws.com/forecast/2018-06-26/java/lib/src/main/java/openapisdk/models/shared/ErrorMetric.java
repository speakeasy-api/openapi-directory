package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorMetric
 *  Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object. 
**/
public class ErrorMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastType")
    public String forecastType;
    public ErrorMetric withForecastType(String forecastType) {
        this.forecastType = forecastType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MAPE")
    public Double mape;
    public ErrorMetric withMape(Double mape) {
        this.mape = mape;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MASE")
    public Double mase;
    public ErrorMetric withMase(Double mase) {
        this.mase = mase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RMSE")
    public Double rmse;
    public ErrorMetric withRmse(Double rmse) {
        this.rmse = rmse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WAPE")
    public Double wape;
    public ErrorMetric withWape(Double wape) {
        this.wape = wape;
        return this;
    }
}
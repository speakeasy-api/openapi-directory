package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetStatisticsCharging200ApplicationJson {
    @JsonProperty("costSum")
    public Double costSum;
    public GetStatisticsCharging200ApplicationJson withCostSum(Double costSum) {
        this.costSum = costSum;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public GetStatisticsCharging200ApplicationJson withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonProperty("kw")
    public GetStatisticsCharging200ApplicationJsonKw kw;
    public GetStatisticsCharging200ApplicationJson withKw(GetStatisticsCharging200ApplicationJsonKw kw) {
        this.kw = kw;
        return this;
    }
    @JsonProperty("kwhSum")
    public Double kwhSum;
    public GetStatisticsCharging200ApplicationJson withKwhSum(Double kwhSum) {
        this.kwhSum = kwhSum;
        return this;
    }
    @JsonProperty("price")
    public GetStatisticsCharging200ApplicationJsonPrice price;
    public GetStatisticsCharging200ApplicationJson withPrice(GetStatisticsCharging200ApplicationJsonPrice price) {
        this.price = price;
        return this;
    }
}
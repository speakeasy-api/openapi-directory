package openapisdk.models.operations;



public class GetGameWeatherResponse {
    public String contentType;
    public GetGameWeatherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GameWeather[] gameWeathers;
    public GetGameWeatherResponse withGameWeathers(openapisdk.models.shared.GameWeather[] gameWeathers) {
        this.gameWeathers = gameWeathers;
        return this;
    }
    public Long statusCode;
    public GetGameWeatherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.shared;


public enum UploadContentTypeEnum {
    APPLICATION_VND_CLIMATE_FIELD_GEOJSON("application/vnd.climate.field.geojson"),
    IMAGE_VND_CLIMATE_THERMAL_GEOTIFF("image/vnd.climate.thermal.geotiff"),
    IMAGE_VND_CLIMATE_NDVI_GEOTIFF("image/vnd.climate.ndvi.geotiff"),
    IMAGE_VND_CLIMATE_WATERSTRESS_GEOTIFF("image/vnd.climate.waterstress.geotiff"),
    IMAGE_VND_CLIMATE_ELEVATION_GEOTIFF("image/vnd.climate.elevation.geotiff"),
    IMAGE_VND_CLIMATE_RAW_GEOTIFF("image/vnd.climate.raw.geotiff"),
    IMAGE_VND_CLIMATE_RGB_GEOTIFF("image/vnd.climate.rgb.geotiff");

    public final String value;

    private UploadContentTypeEnum(String value) {
        this.value = value;
    }
}

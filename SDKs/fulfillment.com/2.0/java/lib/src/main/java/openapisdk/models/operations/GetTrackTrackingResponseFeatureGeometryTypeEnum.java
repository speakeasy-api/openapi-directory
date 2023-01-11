package openapisdk.models.operations;


public enum GetTrackTrackingResponseFeatureGeometryTypeEnum {
    POINT("Point"),
    LINE_STRING("LineString"),
    POLYGON("Polygon"),
    MULTI_POINT("MultiPoint"),
    MULTI_LINE_STRING("MultiLineString"),
    MULTI_POLYGON("MultiPolygon");

    public final String value;

    private GetTrackTrackingResponseFeatureGeometryTypeEnum(String value) {
        this.value = value;
    }
}

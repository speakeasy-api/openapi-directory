package openapisdk.models.operations;


public enum ExportFmtEnum {
    KML("kml"),
    KMZPPA("kmzppa"),
    SHP("shp"),
    TIFF("tiff");

    public final String value;

    private ExportFmtEnum(String value) {
        this.value = value;
    }
}

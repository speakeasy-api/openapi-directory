import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Content type representing data being uploaded (e.g. image/vnd.climate.rgb.geotiff)
 */
export declare enum UploadContentTypeEnum {
    ImageVndClimateThermalGeotiff = "image/vnd.climate.thermal.geotiff",
    ImageVndClimateNdviGeotiff = "image/vnd.climate.ndvi.geotiff",
    ImageVndClimateRgbGeotiff = "image/vnd.climate.rgb.geotiff",
    ImageVndClimateRgbNirGeotiff = "image/vnd.climate.rgb-nir.geotiff",
    ImageVndClimateRgbCirGeotiff = "image/vnd.climate.rgb-cir.geotiff",
    ImageVndClimateWaterstressGeotiff = "image/vnd.climate.waterstress.geotiff",
    ImageVndClimateElevationGeotiff = "image/vnd.climate.elevation.geotiff",
    ImageVndClimateRawGeotiff = "image/vnd.climate.raw.geotiff",
    ApplicationVndClimateFieldGeojson = "application/vnd.climate.field.geojson",
    ApplicationVndClimateRxPlantingShp = "application/vnd.climate.rx.planting.shp",
    ApplicationVndClimatePrescriptionZonesShp = "application/vnd.climate.prescription.zones.shp",
    ApplicationVndClimateModusXml = "application/vnd.climate.modus.xml",
    ApplicationVndClimateStandCountGeojson = "application/vnd.climate.stand-count.geojson",
    ApplicationVndClimateWeedCountGeojson = "application/vnd.climate.weed-count.geojson",
    ApplicationVndClimateAsAppliedZip = "application/vnd.climate.as-applied.zip",
    ApplicationVndClimateAsPlantedZip = "application/vnd.climate.as-planted.zip",
    ApplicationVndClimateAsHarvestedZip = "application/vnd.climate.as-harvested.zip"
}
/**
 * Client request to upload data for a user.
 */
export declare class Upload extends SpeakeasyBase {
    /**
     * Content type representing data being uploaded (e.g. image/vnd.climate.rgb.geotiff)
     */
    contentType: UploadContentTypeEnum;
    /**
     * Content size in bytes
     */
    length: number;
    /**
     * Base64 encoded md5 hash of the content
     */
    md5: string;
    metadata?: Record<string, any>;
}

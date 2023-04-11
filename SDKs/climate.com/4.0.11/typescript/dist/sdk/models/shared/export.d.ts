import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Content type representing data being exported (e.g. application/vnd.climate.acrsi.geojson).
 */
export declare enum ExportContentTypeEnum {
    ApplicationVndClimateAcrsiGeojson = "application/vnd.climate.acrsi.geojson",
    ApplicationVndClimateHarvestGeojson = "application/vnd.climate.harvest.geojson"
}
/**
 * Client request to export data from a user.
 */
export declare class Export extends SpeakeasyBase {
    /**
     * Content type representing data being exported (e.g. application/vnd.climate.acrsi.geojson).
     */
    contentType: ExportContentTypeEnum;
    /**
     * Additional specifications for a client's data export request, dependent on the content type.
     */
    definition?: Record<string, any>;
}

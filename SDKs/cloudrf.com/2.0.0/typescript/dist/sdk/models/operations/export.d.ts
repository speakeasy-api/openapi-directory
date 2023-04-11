import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
/**
 * Raster/Vector file format: KML, KMZ, SHP, GeoTIFF
 */
export declare enum ExportFmtEnum {
    Kml = "kml",
    Kmzppa = "kmzppa",
    Shp = "shp",
    Tiff = "tiff"
}
export declare class ExportRequest extends SpeakeasyBase {
    /**
     * Calculation file name
     */
    file: string;
    /**
     * Raster/Vector file format: KML, KMZ, SHP, GeoTIFF
     */
    fmt: ExportFmtEnum;
}
export declare class ExportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

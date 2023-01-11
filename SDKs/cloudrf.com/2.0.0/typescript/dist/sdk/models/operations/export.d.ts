import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExportFmtEnum {
    Kml = "kml",
    Kmzppa = "kmzppa",
    Shp = "shp",
    Tiff = "tiff"
}
export declare class ExportQueryParams extends SpeakeasyBase {
    file: string;
    fmt: ExportFmtEnum;
}
export declare class ExportSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ExportRequest extends SpeakeasyBase {
    queryParams: ExportQueryParams;
    security: ExportSecurity;
}
export declare class ExportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

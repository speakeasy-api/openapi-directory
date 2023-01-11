import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImplantableDevicesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ImplantableDevicesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    muDate?: string;
    muDateRange?: string;
    patient?: number;
}
export declare class ImplantableDevicesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ImplantableDevicesReadRequest extends SpeakeasyBase {
    pathParams: ImplantableDevicesReadPathParams;
    queryParams: ImplantableDevicesReadQueryParams;
    security: ImplantableDevicesReadSecurity;
}
export declare class ImplantableDevicesReadResponse extends SpeakeasyBase {
    contentType: string;
    implantableDevice?: shared.ImplantableDevice;
    statusCode: number;
}

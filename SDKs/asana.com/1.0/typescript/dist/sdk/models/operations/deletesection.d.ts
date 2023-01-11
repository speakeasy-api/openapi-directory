import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSectionPathParams extends SpeakeasyBase {
    sectionGid: string;
}
export declare class DeleteSectionQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteSection200ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>;
}
export declare class DeleteSectionRequest extends SpeakeasyBase {
    pathParams: DeleteSectionPathParams;
    queryParams: DeleteSectionQueryParams;
}
export declare class DeleteSectionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteSection200ApplicationJSONObject?: DeleteSection200ApplicationJson;
}

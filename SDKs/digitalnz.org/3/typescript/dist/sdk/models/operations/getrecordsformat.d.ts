import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordsFormatPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class GetRecordsFormatQueryParams extends SpeakeasyBase {
    andCategory?: shared.ApiKeyEnum;
    andCentury?: string;
    andCollection?: string;
    andContentPartner?: string;
    andCreator?: string;
    andDate?: string;
    andDcType?: string;
    andDecade?: string;
    andFormat?: string;
    andHasLargeThumbnailUrl?: shared.ApiKeyEnum2;
    andHasLatLng?: boolean;
    andIsCommercialUse?: boolean;
    andOrFilterField?: string;
    andPlacename?: string;
    andPrimaryCollection?: string;
    andSubject?: string;
    andTitle?: string;
    andUsage?: shared.ApiKeyEnum1;
    andYear?: string;
    apiKey: string;
    direction?: shared.FieldsEnum1;
    excludeFiltersFromFacets?: boolean;
    facets?: shared.FieldsEnum2[];
    facetsPage?: number;
    facetsPerPage?: number;
    fields?: string;
    geoBbox?: string;
    page?: number;
    perPage?: number;
    sort?: shared.FieldsEnum;
    text?: string;
    withoutFilterField?: string;
}
export declare class GetRecordsFormat200ApplicationJson extends SpeakeasyBase {
    facets?: Record<string, Record<string, number>>;
    page?: number;
    perPage?: number;
    records?: shared.RecordT[];
    requestUrl?: string;
    resultCount?: number;
}
export declare class GetRecordsFormatRequest extends SpeakeasyBase {
    pathParams: GetRecordsFormatPathParams;
    queryParams: GetRecordsFormatQueryParams;
}
export declare class GetRecordsFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getRecordsFormat200ApplicationJSONObject?: GetRecordsFormat200ApplicationJson;
    getRecordsFormat400ApplicationJSONObject?: Record<string, any>;
    getRecordsFormat403ApplicationJSONObject?: Record<string, any>;
}

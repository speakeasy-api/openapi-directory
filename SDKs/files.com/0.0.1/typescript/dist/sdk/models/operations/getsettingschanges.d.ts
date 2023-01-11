import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsChangesQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    perPage?: number;
    sortBy?: Record<string, any>;
}
export declare class GetSettingsChangesRequest extends SpeakeasyBase {
    queryParams: GetSettingsChangesQueryParams;
}
export declare class GetSettingsChangesResponse extends SpeakeasyBase {
    contentType: string;
    settingsChangeEntities?: shared.SettingsChangeEntity[];
    statusCode: number;
}

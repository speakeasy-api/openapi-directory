import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetNetworksAdDealStatusEnum {
    Active = "active",
    Inactive = "inactive",
    PendingActive = "pending_active",
    PendingInactive = "pending_inactive"
}
export declare enum GetNetworksSortEnum {
    CreatedAt = "created_at",
    Name = "name",
    UpdatedAt = "updated_at"
}
export declare class GetNetworksQueryParams extends SpeakeasyBase {
    adDealStatus?: GetNetworksAdDealStatusEnum[];
    adRepAccountId?: string;
    ids?: string[];
    pageNumber?: number;
    pageSize?: number;
    q?: string;
    sort?: GetNetworksSortEnum[];
}
export declare class GetNetworks200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Network[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetNetworks400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetNetworks400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetNetworks400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetNetworks400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetNetworks400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetNetworksRequest extends SpeakeasyBase {
    queryParams: GetNetworksQueryParams;
}
export declare class GetNetworksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getNetworks200ApplicationVndApiPlusJsonObject?: GetNetworks200ApplicationVndApiPlusJson;
    getNetworks400ApplicationVndApiPlusJsonObject?: GetNetworks400ApplicationVndApiPlusJson;
}

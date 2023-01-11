import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingHeavyEquipmentIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingHeavyEquipmentIdQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingHeavyEquipmentIdRequest extends SpeakeasyBase {
    pathParams: GetListingHeavyEquipmentIdPathParams;
    queryParams: GetListingHeavyEquipmentIdQueryParams;
}
export declare class GetListingHeavyEquipmentIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    heavyEquipmentsListing?: shared.HeavyEquipmentsListing;
    statusCode: number;
}

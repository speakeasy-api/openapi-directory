import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdExtendRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdExtend200ApplicationJSONTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
/**
 * A space
 */
export declare class GetSpacesSpaceIdExtend200ApplicationJSON extends SpeakeasyBase {
    extend?: Record<string, any>;
    id?: string;
    modificationDate?: string;
    name?: string;
    type?: GetSpacesSpaceIdExtend200ApplicationJSONTypeEnum;
}
export declare class GetSpacesSpaceIdExtendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A space
     */
    getSpacesSpaceIdExtend200ApplicationJSONObject?: GetSpacesSpaceIdExtend200ApplicationJSON;
}

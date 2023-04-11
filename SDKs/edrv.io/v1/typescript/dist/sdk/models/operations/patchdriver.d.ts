import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchDriverRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    streetAndNumber?: string;
}
export declare class PatchDriverRequestBodyPhone extends SpeakeasyBase {
    home?: string;
    mobile?: string;
    work?: string;
}
/**
 * Include driver properties to create here
 */
export declare class PatchDriverRequestBody extends SpeakeasyBase {
    active?: boolean;
    address?: PatchDriverRequestBodyAddress;
    email?: string;
    firstname?: string;
    lastname?: string;
    phone?: PatchDriverRequestBodyPhone;
    source?: string;
    tokens?: any[];
}
export declare class PatchDriverRequest extends SpeakeasyBase {
    /**
     * Include driver properties to create here
     */
    requestBody: PatchDriverRequestBody;
    /**
     * ID of driver that needs to be updated
     */
    id: string;
}
/**
 * Returns the updated driver object
 */
export declare class PatchDriver200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class PatchDriverResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the updated driver object
     */
    patchDriver200ApplicationJSONObject?: PatchDriver200ApplicationJSON;
}

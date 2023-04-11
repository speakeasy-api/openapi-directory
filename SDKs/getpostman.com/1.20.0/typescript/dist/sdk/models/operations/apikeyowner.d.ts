import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ApiKeyOwner200ApplicationJSONOperations extends SpeakeasyBase {
    limit?: number;
    name?: string;
    overage?: number;
    usage?: number;
}
export declare class ApiKeyOwner200ApplicationJSONUser extends SpeakeasyBase {
    avatar?: string;
    email?: string;
    fullName?: string;
    id?: string;
    isPublic?: boolean;
    username?: string;
}
/**
 * Valid Response
 */
export declare class ApiKeyOwner200ApplicationJSON extends SpeakeasyBase {
    operations?: ApiKeyOwner200ApplicationJSONOperations[];
    user?: ApiKeyOwner200ApplicationJSONUser;
}
export declare class ApiKeyOwnerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Valid Response
     */
    apiKeyOwner200ApplicationJSONObject?: ApiKeyOwner200ApplicationJSON;
}

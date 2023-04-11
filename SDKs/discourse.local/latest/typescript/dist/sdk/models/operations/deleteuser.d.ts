import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserRequestBody extends SpeakeasyBase {
    blockEmail?: boolean;
    blockIp?: boolean;
    blockUrls?: boolean;
    deletePosts?: boolean;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    requestBody?: DeleteUserRequestBody;
    id: number;
}
/**
 * response
 */
export declare class DeleteUser200ApplicationJSON extends SpeakeasyBase {
    deleted: boolean;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    deleteUser200ApplicationJSONObject?: DeleteUser200ApplicationJSON;
}

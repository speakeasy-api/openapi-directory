import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProjectUsernameProjectEnvvarNameRequest extends SpeakeasyBase {
    /**
     * XXXXXXXXXX
     *
     * @remarks
     *
     */
    name: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    project: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    username: string;
}
export declare enum DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum {
    Ok = "OK"
}
/**
 * Deletes the environment variable named ':name'
 *
 * @remarks
 *
 */
export declare class DeleteProjectUsernameProjectEnvvarName200ApplicationJSON extends SpeakeasyBase {
    message?: DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum;
}
export declare class DeleteProjectUsernameProjectEnvvarNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Deletes the environment variable named ':name'
     *
     * @remarks
     *
     */
    deleteProjectUsernameProjectEnvvarName200ApplicationJSONObject?: DeleteProjectUsernameProjectEnvvarName200ApplicationJSON;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SuspendUserRequest extends SpeakeasyBase {
    /**
     * The ID of the user to suspend.
     */
    id: number;
}
export declare class SuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

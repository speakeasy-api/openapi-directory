import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnpublishUserRequest extends SpeakeasyBase {
    /**
     * The ID of the user to unpublish.
     */
    id: number;
}
export declare class UnpublishUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

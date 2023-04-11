import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdRequest extends SpeakeasyBase {
    /**
     * User ID.
     */
    id: number;
}
export declare class GetUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The Users object.
     */
    userEntity?: shared.UserEntity;
}

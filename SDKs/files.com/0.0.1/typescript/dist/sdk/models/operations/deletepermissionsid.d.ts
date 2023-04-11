import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePermissionsIdRequest extends SpeakeasyBase {
    /**
     * Permission ID.
     */
    id: number;
}
export declare class DeletePermissionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

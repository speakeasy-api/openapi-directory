import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRemoteServersIdRequest extends SpeakeasyBase {
    /**
     * Remote Server ID.
     */
    id: number;
}
export declare class DeleteRemoteServersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteGroupsIdRequest extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id: number;
}
export declare class DeleteGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

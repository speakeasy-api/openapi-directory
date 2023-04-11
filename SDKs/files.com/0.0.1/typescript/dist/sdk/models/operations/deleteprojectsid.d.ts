import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProjectsIdRequest extends SpeakeasyBase {
    /**
     * Project ID.
     */
    id: number;
}
export declare class DeleteProjectsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

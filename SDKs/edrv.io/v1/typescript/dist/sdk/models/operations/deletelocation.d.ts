import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLocationRequest extends SpeakeasyBase {
    /**
     * The location id that needs to be deleted
     */
    id: string;
}
export declare class DeleteLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

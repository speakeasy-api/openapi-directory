import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteBundlesIdRequest extends SpeakeasyBase {
    /**
     * Bundle ID.
     */
    id: number;
}
export declare class DeleteBundlesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

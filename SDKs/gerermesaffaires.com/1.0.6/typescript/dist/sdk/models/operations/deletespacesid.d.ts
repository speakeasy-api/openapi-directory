import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesIdRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
}
export declare class DeleteSpacesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesIdStatusCodeRequest extends SpeakeasyBase {
    /**
     * code of the status
     */
    code: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare class DeleteSpacesIdStatusCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

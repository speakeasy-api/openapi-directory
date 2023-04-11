import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDriverRequest extends SpeakeasyBase {
    /**
     * The driver id that needs to be deleted
     */
    id: string;
}
export declare class DeleteDriverResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

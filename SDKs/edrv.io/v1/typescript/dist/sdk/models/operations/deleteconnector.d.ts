import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteConnectorRequest extends SpeakeasyBase {
    /**
     * The connector id that needs to be deleted
     */
    id: string;
}
export declare class DeleteConnectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteClickwrapsIdRequest extends SpeakeasyBase {
    /**
     * Clickwrap ID.
     */
    id: number;
}
export declare class DeleteClickwrapsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

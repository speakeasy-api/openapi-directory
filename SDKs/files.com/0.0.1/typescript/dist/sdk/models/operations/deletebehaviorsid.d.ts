import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteBehaviorsIdRequest extends SpeakeasyBase {
    /**
     * Behavior ID.
     */
    id: number;
}
export declare class DeleteBehaviorsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

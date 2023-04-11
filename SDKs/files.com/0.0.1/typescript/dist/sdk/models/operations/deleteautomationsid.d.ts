import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAutomationsIdRequest extends SpeakeasyBase {
    /**
     * Automation ID.
     */
    id: number;
}
export declare class DeleteAutomationsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteStylesPathRequest extends SpeakeasyBase {
    /**
     * Style path.
     */
    path: string;
}
export declare class DeleteStylesPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

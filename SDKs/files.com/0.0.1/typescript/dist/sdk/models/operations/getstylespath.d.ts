import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStylesPathRequest extends SpeakeasyBase {
    /**
     * Style path.
     */
    path: string;
}
export declare class GetStylesPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The Styles object.
     */
    styleEntity?: shared.StyleEntity;
}

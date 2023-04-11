import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAemHealthCheckRequest extends SpeakeasyBase {
    combineTagsOr?: boolean;
    tags?: string;
}
export declare class GetAemHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getAemHealthCheckDefaultApplicationJSONString?: string;
}

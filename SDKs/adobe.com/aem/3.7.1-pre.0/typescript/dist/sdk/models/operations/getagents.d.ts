import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAgentsRequest extends SpeakeasyBase {
    runmode: string;
}
export declare class GetAgentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getAgentsDefaultApplicationJSONString?: string;
}

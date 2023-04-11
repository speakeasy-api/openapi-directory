import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsDeleteSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class TeamsDeleteRequest extends SpeakeasyBase {
    /**
     * Team unique ID.
     */
    teamId: string;
}
export declare class TeamsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class TeamsGetRequest extends SpeakeasyBase {
    /**
     * Team unique ID.
     */
    teamId: string;
}
export declare class TeamsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Team
     */
    team?: shared.Team;
}

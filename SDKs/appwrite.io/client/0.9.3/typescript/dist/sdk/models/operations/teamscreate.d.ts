import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCreateSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class TeamsCreateRequestBody extends SpeakeasyBase {
    /**
     * Team name. Max length: 128 chars.
     */
    name: string;
    /**
     * Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars.
     */
    roles?: string[];
}
export declare class TeamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Team
     */
    team?: shared.Team;
}

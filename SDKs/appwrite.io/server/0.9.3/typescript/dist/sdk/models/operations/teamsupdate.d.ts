import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class TeamsUpdateRequestBody extends SpeakeasyBase {
    /**
     * Team name. Max length: 128 chars.
     */
    name: string;
}
export declare class TeamsUpdateRequest extends SpeakeasyBase {
    requestBody?: TeamsUpdateRequestBody;
    /**
     * Team unique ID.
     */
    teamId: string;
}
export declare class TeamsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Team
     */
    team?: shared.Team;
}

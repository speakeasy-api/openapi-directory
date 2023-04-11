import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveProjectRequest extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
export declare class TeamsRemoveProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

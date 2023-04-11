import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposCheckCollaboratorRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    username: string;
}
export declare class ReposCheckCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

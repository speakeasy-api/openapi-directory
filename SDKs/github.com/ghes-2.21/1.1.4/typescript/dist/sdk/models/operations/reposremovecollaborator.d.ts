import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposRemoveCollaboratorRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    username: string;
}
export declare class ReposRemoveCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

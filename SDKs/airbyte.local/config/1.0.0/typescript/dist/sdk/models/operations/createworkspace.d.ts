import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    workspaceRead?: shared.WorkspaceRead;
}

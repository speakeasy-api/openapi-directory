import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetWorkflowAccessToRepositoryRequest extends SpeakeasyBase {
    actionsWorkflowAccessToRepository: shared.ActionsWorkflowAccessToRepository;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ActionsSetWorkflowAccessToRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

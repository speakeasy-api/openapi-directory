import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InteractionsSetRestrictionsForRepoRequest extends SpeakeasyBase {
    interactionLimit: shared.InteractionLimit;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class InteractionsSetRestrictionsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    interactionLimitResponse?: shared.InteractionLimitResponse;
}

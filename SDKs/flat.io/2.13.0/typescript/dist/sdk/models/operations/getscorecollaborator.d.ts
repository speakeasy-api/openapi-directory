import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScoreCollaboratorSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetScoreCollaboratorRequest extends SpeakeasyBase {
    /**
     * Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**
     *
     * @remarks
     *
     */
    collaborator: string;
    /**
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     *
     * @remarks
     *
     */
    score: string;
    /**
     * This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
     *
     * @remarks
     *
     */
    sharingKey?: string;
}
export declare class GetScoreCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Account overquota
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * Collaborator information
     */
    resourceCollaborator?: shared.ResourceCollaborator;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

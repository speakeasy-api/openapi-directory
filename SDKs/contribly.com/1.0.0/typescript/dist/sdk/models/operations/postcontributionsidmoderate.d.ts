import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostContributionsIdModerateRequest extends SpeakeasyBase {
    /**
     * A moderation action
     */
    moderationHistoryItemSubmission: shared.ModerationHistoryItemSubmission;
    /**
     * Id of the contribution to moderate
     */
    id: string;
}
export declare class PostContributionsIdModerateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The submission falied to validate. Check the response body for details.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The moderation action was successfully applied
     */
    postContributionsIdModerate200ApplicationJSONString?: string;
}

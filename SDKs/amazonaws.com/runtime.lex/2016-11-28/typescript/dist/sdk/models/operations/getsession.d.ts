import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSessionRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The alias in use for the bot that contains the session data.
     */
    botAlias: string;
    /**
     * The name of the bot that contains the session data.
     */
    botName: string;
    /**
     * <p>A string used to filter the intents returned in the <code>recentIntentSummaryView</code> structure. </p> <p>When you specify a filter, only intents with their <code>checkpointLabel</code> field set to that string are returned.</p>
     */
    checkpointLabelFilter?: string;
    /**
     * The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot.
     */
    userId: string;
}
export declare class GetSessionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getSessionResponse?: shared.GetSessionResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveContext } from "./activecontext";
import { DialogStateEnum } from "./dialogstateenum";
import { IntentConfidence } from "./intentconfidence";
import { MessageFormatTypeEnum } from "./messageformattypeenum";
import { PredictedIntent } from "./predictedintent";
import { ResponseCard } from "./responsecard";
import { SentimentResponse } from "./sentimentresponse";
/**
 * Success
 */
export declare class PostTextResponse extends SpeakeasyBase {
    activeContexts?: ActiveContext[];
    alternativeIntents?: PredictedIntent[];
    botVersion?: string;
    dialogState?: DialogStateEnum;
    intentName?: string;
    message?: string;
    messageFormat?: MessageFormatTypeEnum;
    nluIntentConfidence?: IntentConfidence;
    responseCard?: ResponseCard;
    sentimentResponse?: SentimentResponse;
    sessionAttributes?: Record<string, string>;
    sessionId?: string;
    slotToElicit?: string;
    slots?: Record<string, string>;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ImageResponseCard } from "./imageresponsecard";
import { MessageContentTypeEnum } from "./messagecontenttypeenum";
/**
 * Container for text that is returned to the customer..
 */
export declare class Message extends SpeakeasyBase {
    content?: string;
    contentType: MessageContentTypeEnum;
    /**
     * <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>
     */
    imageResponseCard?: ImageResponseCard;
}

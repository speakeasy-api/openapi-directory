import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessageReactionsIdRequest extends SpeakeasyBase {
    /**
     * Message Reaction ID.
     */
    id: number;
}
export declare class GetMessageReactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The MessageReactions object.
     */
    messageReactionEntity?: shared.MessageReactionEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

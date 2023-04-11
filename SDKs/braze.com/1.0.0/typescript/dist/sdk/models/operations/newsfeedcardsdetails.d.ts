import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NewsFeedCardsDetailsRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * Card API identifier
     */
    cardId?: string;
}
export declare class NewsFeedCardsDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

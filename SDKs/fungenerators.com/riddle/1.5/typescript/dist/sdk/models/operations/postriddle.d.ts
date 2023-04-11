import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRiddleSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class PostRiddleRequest extends SpeakeasyBase {
    /**
     * Answer(s) to the riddle question
     */
    answer: string;
    /**
     * Category of the riddle
     */
    category: string;
    /**
     * Riddle Question
     */
    question: string;
}
export declare class PostRiddleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

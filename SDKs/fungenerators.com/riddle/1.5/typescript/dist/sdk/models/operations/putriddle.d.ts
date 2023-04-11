import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutRiddleSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class PutRiddleRequest extends SpeakeasyBase {
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
export declare class PutRiddleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

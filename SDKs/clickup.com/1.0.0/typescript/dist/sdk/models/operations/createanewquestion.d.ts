import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateANewQuestionRequestBody extends SpeakeasyBase {
    choices?: string[];
    question?: string;
}
export declare class CreateANewQuestionResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

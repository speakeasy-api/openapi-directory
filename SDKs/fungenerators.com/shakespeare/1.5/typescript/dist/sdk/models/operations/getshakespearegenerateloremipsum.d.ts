import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetShakespeareGenerateLoremIpsumSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetShakespeareGenerateLoremIpsumRequest extends SpeakeasyBase {
    /**
     * No of elements to generate
     */
    limit?: number;
    /**
     * Type of element to generate `paragraphs/sentences/words`.
     */
    type?: string;
}
export declare class GetShakespeareGenerateLoremIpsumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

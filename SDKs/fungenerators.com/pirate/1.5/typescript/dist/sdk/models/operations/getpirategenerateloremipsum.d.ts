import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPirateGenerateLoremIpsumSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetPirateGenerateLoremIpsumRequest extends SpeakeasyBase {
    /**
     * No of elements to generate
     */
    limit?: number;
    /**
     * Type of element to generate `paragraphs/sentences/words`.
     */
    type?: string;
}
export declare class GetPirateGenerateLoremIpsumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

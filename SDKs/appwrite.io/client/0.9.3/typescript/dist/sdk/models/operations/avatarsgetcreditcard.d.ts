import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AvatarsGetCreditCardSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AvatarsGetCreditCardRequest extends SpeakeasyBase {
    /**
     * Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.
     */
    code: string;
    /**
     * Image height. Pass an integer between 0 to 2000. Defaults to 100.
     */
    height?: number;
    /**
     * Image quality. Pass an integer between 0 to 100. Defaults to 100.
     */
    quality?: number;
    /**
     * Image width. Pass an integer between 0 to 2000. Defaults to 100.
     */
    width?: number;
}
export declare class AvatarsGetCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

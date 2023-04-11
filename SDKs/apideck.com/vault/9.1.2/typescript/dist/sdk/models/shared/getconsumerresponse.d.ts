import { SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";
/**
 * Consumer
 */
export declare class GetConsumerResponse extends SpeakeasyBase {
    data: Consumer;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";
/**
 * Consumer updated
 */
export declare class UpdateConsumerResponse extends SpeakeasyBase {
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

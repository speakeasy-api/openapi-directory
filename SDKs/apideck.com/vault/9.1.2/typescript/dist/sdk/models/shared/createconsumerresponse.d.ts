import { SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";
/**
 * Consumer created
 */
export declare class CreateConsumerResponse extends SpeakeasyBase {
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

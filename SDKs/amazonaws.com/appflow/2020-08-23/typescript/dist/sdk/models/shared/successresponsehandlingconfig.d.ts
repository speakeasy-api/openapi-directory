import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.</p> <p>For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.</p>
 */
export declare class SuccessResponseHandlingConfig extends SpeakeasyBase {
    bucketName?: string;
    bucketPrefix?: string;
}

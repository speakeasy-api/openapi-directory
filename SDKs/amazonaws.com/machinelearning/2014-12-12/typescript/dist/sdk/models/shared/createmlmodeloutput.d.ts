import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p>
 */
export declare class CreateMLModelOutput extends SpeakeasyBase {
    mlModelId?: string;
}

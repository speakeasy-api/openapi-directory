import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteRequest } from "./deleterequest";
import { PutRequest } from "./putrequest";
/**
 * This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code.
 */
export declare class WriteRequest extends SpeakeasyBase {
    /**
     * A container for a Delete BatchWrite request
     */
    deleteRequest?: DeleteRequest;
    /**
     * A container for a Put BatchWrite request
     */
    putRequest?: PutRequest;
}
